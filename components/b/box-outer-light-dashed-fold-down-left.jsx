import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4ds2m-5f.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4ds2m-5f"/>`,
		"fallback": "memory:box-outer-light-dashed-fold-down-left",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9n_yslph.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9n_yslph"/>`,
		"fallback": "memory:box-outer-light-dashed-down-left-right",
	});
}

export default Component;

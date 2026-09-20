import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4dlh8bkq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4dlh8bkq"/>`,
		"fallback": "memory:box-light-round-down-right-stipple-outer",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp6tc4bai.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp6tc4bai"/>`,
		"fallback": "memory:box-light-vertical-left-stipple",
	});
}

export default Component;

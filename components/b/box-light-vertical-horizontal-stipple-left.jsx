import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq6w5q5vp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq6w5q5vp"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-left",
	});
}

export default Component;

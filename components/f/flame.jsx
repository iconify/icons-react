import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7gj44blj.css';

const viewBox = {"width":180,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7gj44blj"/>`,
		"fallback": "thesvg:flame",
	});
}

export default Component;

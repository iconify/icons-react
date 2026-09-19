import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sudv4fsht.css';
import '../../css/a/a1bltozvo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sudv4fsht"/><path class="a1bltozvo"/></g>`,
		"fallback": "glyphs:building",
	});
}

export default Component;

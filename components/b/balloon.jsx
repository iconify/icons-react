import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f6g9x0vsh.css';
import '../../css/i/i3204tufp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f6g9x0vsh"/><path class="i3204tufp"/></g>`,
		"fallback": "streamline:balloon",
	});
}

export default Component;

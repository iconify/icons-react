import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/idj9gubal.css';
import '../../css/g/g041zgxvk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="idj9gubal"/><path class="g041zgxvk"/></g>`,
		"fallback": "streamline:desktop-chat",
	});
}

export default Component;

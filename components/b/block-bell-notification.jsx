import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nx-a8j_0m.css';
import '../../css/i/irrwfyb7j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nx-a8j_0m"/><path class="irrwfyb7j"/></g>`,
		"fallback": "streamline:block-bell-notification",
	});
}

export default Component;

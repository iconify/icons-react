import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ayo33pu3z.css';
import '../../css/y/y-_1uigqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ayo33pu3z"/><path class="y-_1uigqo"/></g>`,
		"fallback": "streamline:braces-circle",
	});
}

export default Component;

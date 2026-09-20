import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jztnoxb6e.css';
import '../../css/t/tqhyxgb3n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jztnoxb6e"/><path class="tqhyxgb3n"/></g>`,
		"fallback": "streamline:computer-desktop-favorite-heart-device-display-computer-favorite-like-heart-desktop",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qe5kcmbhk.css';
import '../../css/a/a2xa15bon.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qe5kcmbhk"/><path class="a2xa15bon"/></g>`,
		"fallback": "streamline:blood-donate-drop",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/odggh3bzu.css';
import '../../css/q/qbq4lkoox.css';
import '../../css/v/vacois-ld.css';
import '../../css/s/sgaevabee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="odggh3bzu"/><path class="qbq4lkoox"/><path class="vacois-ld"/><path class="sgaevabee"/></g>`,
		"fallback": "streamline-cyber:bubble-chat-double-typing-smiley-face-1",
	});
}

export default Component;

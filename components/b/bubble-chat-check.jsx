import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgts9bcxv.css';
import '../../css/y/y102wmgfh.css';
import '../../css/l/lyzbmhl9s.css';
import '../../css/r/rbj225sao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgts9bcxv"/><path class="y102wmgfh"/><path class="lyzbmhl9s"/><path class="rbj225sao"/></g>`,
		"fallback": "streamline-cyber-color:bubble-chat-check",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1nvsjbaj.css';
import '../../css/q/q7fkrubeg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c1nvsjbaj"/><path class="q7fkrubeg"/></g>`,
		"fallback": "streamline-flex-color:chat-bubble-typing-oval-flat",
	});
}

export default Component;

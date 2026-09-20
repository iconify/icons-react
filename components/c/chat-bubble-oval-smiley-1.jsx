import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h96wtxvgv.css';
import '../../css/c/c0jyabbey.css';
import '../../css/n/n8fmamboy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="h96wtxvgv"/><path class="c0jyabbey"/><path class="n8fmamboy"/></g>`,
		"fallback": "streamline-plump-color:chat-bubble-oval-smiley-1",
	});
}

export default Component;

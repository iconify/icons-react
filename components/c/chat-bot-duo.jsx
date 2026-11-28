import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-m8k-57c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t275zhbkr.css';
import '../../css/v/voz2zdbvr.css';
import '../../css/s/s4f6ywbzq.css';
import '../../css/c/cgvizrltr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-m8k-57c secondary"/><g class="dt0cm9dhy primary"><path class="t275zhbkr"/><path class="voz2zdbvr"/><path class="s4f6ywbzq"/><path class="cgvizrltr"/></g>`,
		"fallback": "iconaut:chat-bot-duo",
	});
}

export default Component;

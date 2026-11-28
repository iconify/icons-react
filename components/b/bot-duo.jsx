import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uboz-naet.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ikmo83bou.css';
import '../../css/z/zjw-t-1jy.css';
import '../../css/w/w0ipgl15t.css';
import '../../css/s/s7mco3beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary uboz-naet"/><g class="dt0cm9dhy primary"><path class="ikmo83bou"/><path class="zjw-t-1jy"/><path class="w0ipgl15t"/><path class="s7mco3beq"/></g>`,
		"fallback": "iconaut:bot-duo",
	});
}

export default Component;

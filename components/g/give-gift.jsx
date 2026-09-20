import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yamq3pbce.css';
import '../../css/j/jad-uuxvw.css';
import '../../css/b/b79v5gbqh.css';
import '../../css/w/wh6ci6sci.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yamq3pbce"/><path class="jad-uuxvw"/><path class="b79v5gbqh"/><path class="wh6ci6sci"/></g>`,
		"fallback": "streamline-plump-color:give-gift",
	});
}

export default Component;

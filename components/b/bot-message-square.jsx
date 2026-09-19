import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pzh2tq24z.css';
import '../../css/n/n2ecycc9l.css';
import '../../css/u/urhq_0hak.css';
import '../../css/p/parq8fbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pzh2tq24z"/><path class="n2ecycc9l"/><path class="urhq_0hak"/><path class="parq8fbol"/></g>`,
		"fallback": "hugeicons:bot-message-square",
	});
}

export default Component;

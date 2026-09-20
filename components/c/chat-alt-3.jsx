import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h3z7xyb9s.css';
import '../../css/e/esnm02bkh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h3z7xyb9s"/><path class="esnm02bkh"/></g>`,
		"fallback": "marketeq:chat-alt-3",
	});
}

export default Component;

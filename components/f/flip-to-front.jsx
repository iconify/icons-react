import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/v/vp1a5u2if.css';
import '../../css/y/ytmrjgb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path clip-rule="evenodd" class="vp1a5u2if"/><path class="ytmrjgb9b"/></g>`,
		"fallback": "tdesign:flip-to-front",
	});
}

export default Component;

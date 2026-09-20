import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eq3frqb0l.css';
import '../../css/p/pj1dl0fyn.css';
import '../../css/d/d0_r47ojw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eq3frqb0l"/><path class="pj1dl0fyn"/><path class="d0_r47ojw"/></g>`,
		"fallback": "solar:chat-square-question-mark-line-duotone",
	});
}

export default Component;

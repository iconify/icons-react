import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hk6kc4b6f.css';
import '../../css/u/u1pba_b-t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hk6kc4b6f"/><path class="u1pba_b-t"/></g>`,
		"fallback": "streamline-color:chat-bubble-square-question-flat",
	});
}

export default Component;

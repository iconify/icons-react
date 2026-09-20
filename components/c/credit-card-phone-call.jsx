import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cuts94bpt.css';
import '../../css/r/rv7ziu97u.css';
import '../../css/e/ezfkwpbnf.css';
import '../../css/v/vk5jjex7q.css';
import '../../css/i/ib8ttcbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cuts94bpt"/><path class="rv7ziu97u"/><path class="ezfkwpbnf"/><path class="vk5jjex7q"/><path class="ib8ttcbir"/></g>`,
		"fallback": "streamline-freehand-color:credit-card-phone-call",
	});
}

export default Component;

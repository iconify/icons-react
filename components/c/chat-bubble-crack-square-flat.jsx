import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rvyd-rbqp.css';
import '../../css/b/bjc8kqpsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rvyd-rbqp"/><path class="bjc8kqpsa"/></g>`,
		"fallback": "streamline-sharp-color:chat-bubble-crack-square-flat",
	});
}

export default Component;

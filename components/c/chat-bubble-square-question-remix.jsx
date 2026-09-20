import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h84gtiblq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h84gtiblq"/>`,
		"fallback": "streamline-plump:chat-bubble-square-question-remix",
	});
}

export default Component;

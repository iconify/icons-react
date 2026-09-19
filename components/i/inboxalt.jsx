import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn06u2abc.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn06u2abc"/>`,
		"fallback": "whh:inboxalt",
	});
}

export default Component;

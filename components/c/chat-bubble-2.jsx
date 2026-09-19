import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx94i8bhv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx94i8bhv"/>`,
		"fallback": "f7:chat-bubble-2",
	});
}

export default Component;

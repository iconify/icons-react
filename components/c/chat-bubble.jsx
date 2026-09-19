import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdahbrsqi.css';
import '../../css/z/zt1dysdrf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdahbrsqi"/><path class="zt1dysdrf"/>`,
		"fallback": "cil:chat-bubble",
	});
}

export default Component;

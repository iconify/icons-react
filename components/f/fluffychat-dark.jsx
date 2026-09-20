import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx040bc6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx040bc6j"/>`,
		"fallback": "selfhst:fluffychat-dark",
	});
}

export default Component;

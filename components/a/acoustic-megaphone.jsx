import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q74a_vbnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q74a_vbnn"/>`,
		"fallback": "game-icons:acoustic-megaphone",
	});
}

export default Component;

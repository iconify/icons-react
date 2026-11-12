import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rku15hbsi.css';
import '../../css/p/pp9v2l8_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rku15hbsi"/><path class="pp9v2l8_u"/>`,
		"fallback": "selfhst:flow-like",
	});
}

export default Component;

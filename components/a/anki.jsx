import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry1plibgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry1plibgr"/>`,
		"fallback": "selfhst:anki",
	});
}

export default Component;

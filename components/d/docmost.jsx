import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfumhs5dd.css';
import '../../css/n/nsh88-uyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfumhs5dd"/><path class="nsh88-uyo"/>`,
		"fallback": "selfhst:docmost",
	});
}

export default Component;

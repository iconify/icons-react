import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq-ctd02e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iq-ctd02e"/>`,
		"fallback": "ix:emote-happy-filled",
	});
}

export default Component;

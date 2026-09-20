import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilikg4vpk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilikg4vpk"/>`,
		"fallback": "selfhst:briefing-light",
	});
}

export default Component;

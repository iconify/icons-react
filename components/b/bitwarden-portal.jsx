import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2dsus3eh.css';
import '../../css/m/mh2gjorsd.css';
import '../../css/h/h7vs4zvyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2dsus3eh"/><path class="mh2gjorsd"/><path class="h7vs4zvyg"/>`,
		"fallback": "selfhst:bitwarden-portal",
	});
}

export default Component;

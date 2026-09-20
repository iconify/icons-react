import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic-zq4-uu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic-zq4-uu"/>`,
		"fallback": "selfhst:grok-light",
	});
}

export default Component;

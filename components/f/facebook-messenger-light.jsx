import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfbg9objp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfbg9objp"/>`,
		"fallback": "selfhst:facebook-messenger-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqpbdh_ni.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqpbdh_ni"/>`,
		"fallback": "streamline-pixel:email-emoji-smile-smart",
	});
}

export default Component;

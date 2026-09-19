import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwx53kb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwx53kb4s"/>`,
		"fallback": "ion:android-cancel",
	});
}

export default Component;

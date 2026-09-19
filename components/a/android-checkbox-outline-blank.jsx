import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xngyb4r-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xngyb4r-h"/>`,
		"fallback": "ion:android-checkbox-outline-blank",
	});
}

export default Component;

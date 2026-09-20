import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mofy_3ahk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mofy_3ahk"/>`,
		"fallback": "ix:error-filled",
	});
}

export default Component;

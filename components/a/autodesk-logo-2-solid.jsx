import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgz1uxb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgz1uxb6u"/>`,
		"fallback": "streamline-logos:autodesk-logo-2-solid",
	});
}

export default Component;

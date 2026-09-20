import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd-lffx-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd-lffx-l"/>`,
		"fallback": "thesvg-color:google-gemini",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj-b23bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj-b23bfx"/>`,
		"fallback": "hugeicons:google-gemini",
	});
}

export default Component;

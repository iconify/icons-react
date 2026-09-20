import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0y6x2b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0y6x2b4e"/>`,
		"fallback": "streamline-ultimate:google-assistant-logo",
	});
}

export default Component;

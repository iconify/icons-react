import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov7mw7bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ov7mw7bgo"/>`,
		"fallback": "streamline-logos:google-hangouts-meet-logo-block",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv4v3ab7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yv4v3ab7p"/>`,
		"fallback": "streamline-logos:google-meet-logo-block",
	});
}

export default Component;

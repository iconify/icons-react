import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwau4g8cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rwau4g8cd"/>`,
		"fallback": "streamline-logos:adobe-bridge-logo-block",
	});
}

export default Component;

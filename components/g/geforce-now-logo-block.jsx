import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffxbaacul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffxbaacul"/>`,
		"fallback": "streamline-logos:geforce-now-logo-block",
	});
}

export default Component;

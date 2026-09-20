import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3-w3f3uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i3-w3f3uo"/>`,
		"fallback": "streamline-logos:doctrine-logo-block",
	});
}

export default Component;

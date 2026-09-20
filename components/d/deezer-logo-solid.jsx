import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb4qzoycs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mb4qzoycs"/>`,
		"fallback": "streamline-logos:deezer-logo-solid",
	});
}

export default Component;

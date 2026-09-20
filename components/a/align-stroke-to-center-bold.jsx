import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xktn4bb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xktn4bb-u"/>`,
		"fallback": "streamline-ultimate:align-stroke-to-center-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic0iq61gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic0iq61gn"/>`,
		"fallback": "pixelarticons:human-height-alt",
	});
}

export default Component;

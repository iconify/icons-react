import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw19l9bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw19l9bpc"/>`,
		"fallback": "pixelarticons:frame-check",
	});
}

export default Component;

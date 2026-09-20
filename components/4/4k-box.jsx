import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct0n9sbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct0n9sbki"/>`,
		"fallback": "pixelarticons:4k-box",
	});
}

export default Component;

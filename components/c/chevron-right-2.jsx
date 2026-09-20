import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0xv2tbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0xv2tbjc"/>`,
		"fallback": "pixelarticons:chevron-right-2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckr9kb1z.css';
import '../../css/w/wq8x2ubgv.css';
import '../../css/i/i1u8a2d8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wckr9kb1z"/><circle class="wq8x2ubgv"/><path class="i1u8a2d8c"/>`,
		"fallback": "eva:info-outline",
	});
}

export default Component;

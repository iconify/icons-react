import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtf55bc4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtf55bc4w"/>`,
		"fallback": "bx:bxs-battery-low",
	});
}

export default Component;

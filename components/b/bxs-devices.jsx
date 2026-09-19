import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1qpk_20w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1qpk_20w"/>`,
		"fallback": "bx:bxs-devices",
	});
}

export default Component;

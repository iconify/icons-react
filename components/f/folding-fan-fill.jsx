import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j59i0pbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j59i0pbfm"/>`,
		"fallback": "mingcute:folding-fan-fill",
	});
}

export default Component;

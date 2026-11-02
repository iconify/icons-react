import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3zrrmk8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3zrrmk8e"/>`,
		"fallback": "mingcute:folding-fan-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-e16ub1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-e16ub1p"/>`,
		"fallback": "mingcute:dog-line",
	});
}

export default Component;

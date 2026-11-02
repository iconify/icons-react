import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2ea_up5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2ea_up5u"/>`,
		"fallback": "mingcute:circle-dot-dashed-line",
	});
}

export default Component;

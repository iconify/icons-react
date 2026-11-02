import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh624j06r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh624j06r"/>`,
		"fallback": "mingcute:arrow-down-to-dot-line",
	});
}

export default Component;

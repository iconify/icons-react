import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nklcr7bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nklcr7bzk"/>`,
		"fallback": "mingcute:heart-line",
	});
}

export default Component;

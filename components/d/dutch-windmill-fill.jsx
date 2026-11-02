import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6wv1qb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6wv1qb7h"/>`,
		"fallback": "mingcute:dutch-windmill-fill",
	});
}

export default Component;

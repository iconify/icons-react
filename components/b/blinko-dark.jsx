import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-qh99buv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-qh99buv"/>`,
		"fallback": "selfhst:blinko-dark",
	});
}

export default Component;

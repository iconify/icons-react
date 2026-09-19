import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbu5ldbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbu5ldbta"/>`,
		"fallback": "hugeicons:bluetooth-connected",
	});
}

export default Component;

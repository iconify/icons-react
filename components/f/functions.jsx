import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efru-76vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efru-76vb"/>`,
		"fallback": "boxicons:functions",
	});
}

export default Component;

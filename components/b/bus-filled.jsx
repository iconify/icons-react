import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bru7aja0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bru7aja0j"/>`,
		"fallback": "boxicons:bus-filled",
	});
}

export default Component;

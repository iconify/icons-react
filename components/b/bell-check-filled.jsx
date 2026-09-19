import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mccq_k88p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mccq_k88p"/>`,
		"fallback": "boxicons:bell-check-filled",
	});
}

export default Component;

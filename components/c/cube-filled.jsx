import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq8zhvb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq8zhvb7w"/>`,
		"fallback": "boxicons:cube-filled",
	});
}

export default Component;

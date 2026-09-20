import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf06xvx1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf06xvx1j"/>`,
		"fallback": "uil:heart-alt",
	});
}

export default Component;

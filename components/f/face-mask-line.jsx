import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psi_79vqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psi_79vqq"/>`,
		"fallback": "mingcute:face-mask-line",
	});
}

export default Component;

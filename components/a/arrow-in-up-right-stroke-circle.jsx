import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nruyxmb0r.css';
import '../../css/y/ysrry-bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nruyxmb0r"/><path class="ysrry-bqw"/>`,
		"fallback": "boxicons:arrow-in-up-right-stroke-circle",
	});
}

export default Component;

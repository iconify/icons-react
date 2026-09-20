import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/ze9r2nb4s.css';
import '../../css/y/y6qymshal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ze9r2nb4s"/><path class="y6qymshal"/></g>`,
		"fallback": "tabler:brand-framer-motion",
	});
}

export default Component;

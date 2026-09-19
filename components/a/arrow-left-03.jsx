import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/md3qg6xkk.css';
import '../../css/v/v-m5jacix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="md3qg6xkk"/><path class="v-m5jacix"/></g>`,
		"fallback": "hugeicons:arrow-left-03",
	});
}

export default Component;

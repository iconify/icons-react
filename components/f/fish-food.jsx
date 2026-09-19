import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sehsotbxw.css';
import '../../css/h/h1_rkybie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sehsotbxw"/><path class="h1_rkybie"/></g>`,
		"fallback": "hugeicons:fish-food",
	});
}

export default Component;

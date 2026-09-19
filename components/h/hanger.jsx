import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gvyuj2bca.css';
import '../../css/m/m9pyjhbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gvyuj2bca"/><path class="m9pyjhbvs"/></g>`,
		"fallback": "hugeicons:hanger",
	});
}

export default Component;

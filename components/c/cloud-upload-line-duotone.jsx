import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gr3jnwjyg.css';
import '../../css/m/mbtkj4jaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gr3jnwjyg"/><path class="mbtkj4jaq"/></g>`,
		"fallback": "solar:cloud-upload-line-duotone",
	});
}

export default Component;

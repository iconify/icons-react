import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gr3jnwjyg.css';
import '../../css/g/gtnp8gbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gr3jnwjyg"/><path class="gtnp8gbma"/></g>`,
		"fallback": "solar:cloud-minus-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gr3jnwjyg.css';
import '../../css/a/aaut4epsv.css';
import '../../css/p/p655zvzpk.css';
import '../../css/a/a7_6t4bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gr3jnwjyg"/><path class="aaut4epsv"/><path class="p655zvzpk"/><path class="a7_6t4bxt"/></g>`,
		"fallback": "solar:cloud-snowfall-line-duotone",
	});
}

export default Component;

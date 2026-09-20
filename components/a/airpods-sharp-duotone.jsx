import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/ketk88b6c.css';
import '../../css/n/nv1312q6p.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ketk88b6c"/><path class="nv1312q6p"/><path class="rj2y4vkzd"/></g>`,
		"fallback": "keyline-icons:airpods-sharp-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/ketk88b6c.css';
import '../../css/d/d9n7g7e8t.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ketk88b6c"/><path class="d9n7g7e8t"/><path class="rj2y4vkzd"/></g>`,
		"fallback": "keyline-icons:airpods-sharp-two-tone",
	});
}

export default Component;

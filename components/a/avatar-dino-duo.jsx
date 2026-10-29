import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/awsnl_b8i.css';
import '../../css/s/sd-hmubzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="awsnl_b8i"/><path class="sd-hmubzb"/></g>`,
		"fallback": "withicons:avatar-dino-duo",
	});
}

export default Component;

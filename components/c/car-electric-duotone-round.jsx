import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tv9lcfy4b.css';
import '../../css/z/zb_ywvb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tv9lcfy4b"/><path class="zb_ywvb7c"/></g>`,
		"fallback": "coolicons:car-electric-duotone-round",
	});
}

export default Component;

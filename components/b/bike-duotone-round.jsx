import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i90b2mbyl.css';
import '../../css/p/p6uz76bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i90b2mbyl"/><path class="p6uz76bvs"/></g>`,
		"fallback": "coolicons:bike-duotone-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqpv4acmh.css';
import '../../css/t/tmy95jbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wqpv4acmh"/><path class="tmy95jbif"/></g>`,
		"fallback": "coolicons:award-duotone-round",
	});
}

export default Component;

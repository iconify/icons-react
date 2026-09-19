import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqfp4_84m.css';
import '../../css/i/ipzblyqpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqfp4_84m"/><path class="ipzblyqpg"/></g>`,
		"fallback": "iconamoon:email-bold",
	});
}

export default Component;

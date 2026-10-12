import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/temhf4r6a.css';
import '../../css/y/yolid685o.css';
import '../../css/f/flih7wdcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="temhf4r6a"/><path class="yolid685o"/><path class="flih7wdcg"/></g>`,
		"fallback": "andrsrxn:ball-tennis",
	});
}

export default Component;

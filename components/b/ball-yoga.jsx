import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eooujxbvi.css';
import '../../css/y/yolid685o.css';
import '../../css/z/z4awst47u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eooujxbvi"/><path class="yolid685o"/><path class="z4awst47u"/></g>`,
		"fallback": "andrsrxn:ball-yoga",
	});
}

export default Component;

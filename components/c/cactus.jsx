import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghg15tbaf.css';
import '../../css/h/her1bcu1f.css';
import '../../css/k/k6-gi9bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ghg15tbaf"/><path class="her1bcu1f"/><path class="k6-gi9bti"/></g>`,
		"fallback": "andrsrxn:cactus",
	});
}

export default Component;

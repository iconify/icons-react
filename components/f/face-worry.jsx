import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca2dzib3m.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/t/tv-tkebki.css';
import '../../css/f/fe_6ajbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="ca2dzib3m"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="tv-tkebki"/><path class="fe_6ajbsr"/></g>`,
		"fallback": "andrsrxn:face-worry",
	});
}

export default Component;

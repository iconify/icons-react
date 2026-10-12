import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oumpxchdc.css';
import '../../css/h/h27vhbcct.css';
import '../../css/s/sef0mfaso.css';
import '../../css/e/emap27hbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oumpxchdc"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><circle transform="rotate(90 12 12)" class="sef0mfaso"/><path class="emap27hbw"/></g>`,
		"fallback": "andrsrxn:aperture",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olt90gbii.css';
import '../../css/m/mkb_cm8ba.css';
import '../../css/n/ngupifb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olt90gbii"/><path class="mkb_cm8ba"/><path class="ngupifb1v"/></g>`,
		"fallback": "tdesign:chart-ring-1",
	});
}

export default Component;

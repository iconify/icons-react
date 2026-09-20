import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4khs4b9v.css';
import '../../css/w/wu2vxvbra.css';
import '../../css/t/tf80cil7l.css';
import '../../css/v/vi4f9i4vu.css';
import '../../css/n/n7di3rbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w4khs4b9v"/><path class="wu2vxvbra"/><path class="tf80cil7l"/><path class="vi4f9i4vu"/><path class="n7di3rbtf"/></g>`,
		"fallback": "streamline-ultimate-color:currency-pound-decrease",
	});
}

export default Component;

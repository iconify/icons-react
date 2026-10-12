import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxb18ppdc.css';
import '../../css/o/ohem1ccdv.css';
import '../../css/x/x51marank.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxb18ppdc"/><path class="ohem1ccdv"/><path class="x51marank"/></g>`,
		"fallback": "andrsrxn:bricks-shield",
	});
}

export default Component;

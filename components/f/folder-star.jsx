import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee4bl_c2c.css';
import '../../css/o/owyzcp85d.css';
import '../../css/k/ktvvyzbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ee4bl_c2c"/><path class="owyzcp85d"/><path class="ktvvyzbkh"/></g>`,
		"fallback": "andrsrxn:folder-star",
	});
}

export default Component;

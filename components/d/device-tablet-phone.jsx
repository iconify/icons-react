import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfuies48k.css';
import '../../css/u/urss5jpkc.css';
import '../../css/i/i_y_cqlwr.css';
import '../../css/k/kdkpgacwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xfuies48k"/><path class="urss5jpkc"/><path class="i_y_cqlwr"/><path class="kdkpgacwj"/></g>`,
		"fallback": "andrsrxn:device-tablet-phone",
	});
}

export default Component;

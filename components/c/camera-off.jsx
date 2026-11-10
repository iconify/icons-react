import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht-pz5bqy.css';
import '../../css/d/d_02web_z.css';
import '../../css/v/v7sdo0bsx.css';
import '../../css/s/sysy7ev9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ht-pz5bqy"/><path class="d_02web_z"/><path class="v7sdo0bsx"/><path class="sysy7ev9u"/></g>`,
		"fallback": "andrsrxn:camera-off",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n53p-2dpt.css';
import '../../css/z/zqusejbgv.css';
import '../../css/v/vokirb_pg.css';
import '../../css/l/l2na540kp.css';
import '../../css/x/xtch0nbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="n53p-2dpt"/><path class="zqusejbgv"/><path class="vokirb_pg"/><path class="l2na540kp"/><path class="xtch0nbcn"/></g>`,
		"fallback": "lets-icons:arhive-plane-light",
	});
}

export default Component;

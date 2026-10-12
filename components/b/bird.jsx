import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdbmacvwa.css';
import '../../css/e/e91yn_hyv.css';
import '../../css/h/hsha30b5n.css';
import '../../css/y/yp329_vod.css';
import '../../css/d/d6rg-xbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdbmacvwa"/><path class="e91yn_hyv"/><path class="hsha30b5n"/><path class="yp329_vod"/><path class="d6rg-xbtn"/></g>`,
		"fallback": "andrsrxn:bird",
	});
}

export default Component;

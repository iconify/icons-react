import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/q/qchiovbqo.css';
import '../../css/p/p033m0bxa.css';
import '../../css/i/ioc8bvbzh.css';
import '../../css/r/rufdmbbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNe07Rc3l" x1="5.5" x2="12.65" y1="5.51" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGSpGdJc2E" x1="0" x2="0" y1="4.5" y2="12.06" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="qchiovbqo"/><path fill="url(#SVGNe07Rc3l)" class="p033m0bxa wm-shine"/><path class="ioc8bvbzh wm-deco"/><path fill="url(#SVGSpGdJc2E)" class="rufdmbbtj wm-deco"/></g>`,
		"fallback": "withicons-christmas:arrow-down-left",
	});
}

export default Component;

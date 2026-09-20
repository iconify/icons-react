import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnsucibnt.css';
import '../../css/a/ail7rketm.css';
import '../../css/w/w11gq4btp.css';
import '../../css/h/hq1qt2gln.css';
import '../../css/z/zolbpybdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mnsucibnt"/><path class="ail7rketm"/><path clip-rule="evenodd" class="w11gq4btp"/><path clip-rule="evenodd" class="hq1qt2gln"/><path clip-rule="evenodd" class="zolbpybdg"/></g>`,
		"fallback": "solar:closet-bold",
	});
}

export default Component;

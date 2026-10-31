import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kye_jcb4z.css';
import '../../css/e/ek-ps2bhe.css';
import '../../css/m/m7ahgsbvn.css';
import '../../css/i/i4fsizq1g.css';
import '../../css/t/t13yclzzf.css';
import '../../css/k/kcnlfdcgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kye_jcb4z wm-shadow"/><path class="ek-ps2bhe"/><path class="m7ahgsbvn"/><path class="i4fsizq1g"/><path class="t13yclzzf"/><path class="kcnlfdcgl"/></g>`,
		"fallback": "withicons-retro:edit",
	});
}

export default Component;

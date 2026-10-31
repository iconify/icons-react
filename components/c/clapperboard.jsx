import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ktbyvvv_z.css';
import '../../css/c/cxagbsbei.css';
import '../../css/z/z1urlkwqh.css';
import '../../css/b/bk78jvbsc.css';
import '../../css/y/ytg4x6-zn.css';
import '../../css/n/n3ziydbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ktbyvvv_z wm-shadow"/><path class="cxagbsbei"/><path class="z1urlkwqh"/><path class="bk78jvbsc"/><path class="ytg4x6-zn"/><path class="n3ziydbmf"/></g>`,
		"fallback": "withicons-retro:clapperboard",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x9r7i8kqs.css';
import '../../css/z/zzqdkpfnc.css';
import '../../css/x/xizmsebbg.css';
import '../../css/p/pqstgylrj.css';
import '../../css/c/cy-r8tzcg.css';
import '../../css/z/zp1whmb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x9r7i8kqs"/><path class="zzqdkpfnc"/><path class="xizmsebbg"/><path class="pqstgylrj"/><path class="cy-r8tzcg"/><path class="zp1whmb8x"/></g>`,
		"fallback": "withicons-retro:candy-bucket",
	});
}

export default Component;

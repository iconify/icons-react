import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxwfrybwm.css';
import '../../css/c/c91zhyswy.css';
import '../../css/x/x1gv48b7s.css';
import '../../css/y/yeg8nfh6o.css';
import '../../css/l/lt4-_jpeu.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hxwfrybwm"/><path clip-rule="evenodd" class="c91zhyswy"/><path clip-rule="evenodd" class="x1gv48b7s"/><path clip-rule="evenodd" class="yeg8nfh6o"/><path clip-rule="evenodd" class="lt4-_jpeu"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:hand-point-open-off",
	});
}

export default Component;

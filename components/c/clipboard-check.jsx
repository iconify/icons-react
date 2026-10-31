import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/v/v91ay4sjm.css';
import '../../css/j/jj33oabix.css';
import '../../css/x/xjufjhtdi.css';
import '../../css/i/ioitcibqk.css';
import '../../css/h/hhxm6kbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="v91ay4sjm"/><path class="jj33oabix"/><path class="xjufjhtdi"/><path class="ioitcibqk"/><path class="hhxm6kbok"/></g>`,
		"fallback": "withicons-retro:clipboard-check",
	});
}

export default Component;

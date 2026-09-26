import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjxiymbnw.css';
import '../../css/r/rot_1zzym.css';
import '../../css/p/pvo0_mbip.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bjxiymbnw"/><path class="rot_1zzym"/><path clip-rule="evenodd" class="pvo0_mbip"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-user-bold",
	});
}

export default Component;

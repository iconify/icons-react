import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y-9ud7ldi.css';
import '../../css/c/cfi98zf-t.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/u/ukw3xqbut.css';
import '../../css/u/upmg54wmj.css';
import '../../css/w/wc3_as06n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y-9ud7ldi"/><path class="cfi98zf-t wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="ukw3xqbut wm-k"/><path class="upmg54wmj wm-a"/><path class="wc3_as06n wm-a"/></g>`,
		"fallback": "withicons:bath-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmmtnikrr.css';
import '../../css/y/ydeolwcqh.css';
import '../../css/b/bhgf9cc-m.css';
import '../../css/a/anmwjcbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xmmtnikrr"/><path class="ydeolwcqh"/><path class="bhgf9cc-m"/><path class="anmwjcbuy"/></g>`,
		"fallback": "andrsrxn:file-volume",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/turntrbbk.css';
import '../../css/c/closq3bal.css';
import '../../css/x/xtw8gorhr.css';
import '../../css/t/t4hkzqgwx.css';
import '../../css/c/ck203sy_u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="turntrbbk"/><path clip-rule="evenodd" class="closq3bal"/><path class="xtw8gorhr"/><path clip-rule="evenodd" class="t4hkzqgwx"/><path clip-rule="evenodd" class="ck203sy_u"/></g>`,
		"fallback": "pepicons:flower-print",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/odh0ceb1l.css';
import '../../css/a/aet4-uozc.css';
import '../../css/z/zbcx4z0sd.css';
import '../../css/b/b07r3_5ni.css';
import '../../css/e/eao2zh1lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="odh0ceb1l wm-shadow"/><path class="aet4-uozc wm-shadow"/><path class="zbcx4z0sd"/><path class="b07r3_5ni"/><path class="eao2zh1lx"/></g>`,
		"fallback": "withicons-brutal:graduation-cap",
	});
}

export default Component;

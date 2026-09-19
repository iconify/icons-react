import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ups30ep6k.css';
import '../../css/y/ydtkho0hx.css';
import '../../css/q/qc9g0cb4i.css';
import '../../css/z/z5tgbdcjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ups30ep6k"/><path class="ydtkho0hx"/><path class="qc9g0cb4i"/><path class="z5tgbdcjt"/></g>`,
		"fallback": "hugeicons:ai-mail",
	});
}

export default Component;

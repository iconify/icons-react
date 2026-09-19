import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uhfu0tbkz.css';
import '../../css/p/pp224x3ed.css';
import '../../css/q/qtzbrdlmb.css';
import '../../css/s/sj392dbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uhfu0tbkz"/><path class="pp224x3ed"/><path class="qtzbrdlmb"/><path class="sj392dbgb"/></g>`,
		"fallback": "hugeicons:hijab",
	});
}

export default Component;

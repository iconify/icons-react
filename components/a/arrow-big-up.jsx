import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/llbpz6grk.css';
import '../../css/o/omm__pbbn.css';
import '../../css/s/sz2rn0m6u.css';
import '../../css/r/r663b__ir.css';
import '../../css/b/bubjsjbzb.css';
import '../../css/h/hx71cnbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="llbpz6grk wm-shadow"/><path class="omm__pbbn"/><path class="sz2rn0m6u"/><path class="r663b__ir"/><path class="bubjsjbzb wm-shine"/><path class="hx71cnbdn wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-big-up",
	});
}

export default Component;

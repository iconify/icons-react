import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/e25l1ab5m.css';
import '../../css/v/v6lv9fxak.css';
import '../../css/z/zabrmgb4f.css';
import '../../css/q/qoo_fhb1x.css';
import '../../css/l/l602qhbrr.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="e25l1ab5m wm-shadow"/><path class="v6lv9fxak"/><path class="zabrmgb4f"/><path class="qoo_fhb1x"/><path class="l602qhbrr wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-down-left",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g4mjgdcir.css';
import '../../css/k/kiy4gqzzz.css';
import '../../css/x/x_dfjebxh.css';
import '../../css/l/logtg3i9u.css';
import '../../css/e/euhhz9uwc.css';
import '../../css/t/tv5yr4beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="g4mjgdcir wm-shadow"/><path class="kiy4gqzzz"/><path class="x_dfjebxh"/><path class="logtg3i9u"/><path class="euhhz9uwc wm-shine"/><path class="tv5yr4beu wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/p/pu_kvwbra.css';
import '../../css/c/cejwg7bko.css';
import '../../css/l/l7b2gcjkj.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="pu_kvwbra"/><path class="cejwg7bko"/><path class="l7b2gcjkj wm-shine"/><path class="sloj1fjmk wm-deco"/></g>`,
		"fallback": "withicons-sticker:grid-2x2",
	});
}

export default Component;

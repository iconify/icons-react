import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w-9ilhvpt.css';
import '../../css/g/g10-tdb8p.css';
import '../../css/h/hnimnwzhe.css';
import '../../css/d/d20fw-7vw.css';
import '../../css/c/cjqspsbvh.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="w-9ilhvpt wm-shadow"/><path class="g10-tdb8p"/><path class="hnimnwzhe"/><path class="d20fw-7vw"/><path class="cjqspsbvh wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:chevron-up",
	});
}

export default Component;

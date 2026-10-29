import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/ewdbqn92w.css';
import '../../css/k/k9xnibc5r.css';
import '../../css/m/m4m6-qb-t.css';
import '../../css/b/b0_r776xj.css';
import '../../css/f/flbd0cc4q.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ewdbqn92w wm-shadow"/><path class="k9xnibc5r"/><path class="m4m6-qb-t"/><path class="b0_r776xj"/><path class="flbd0cc4q wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:crop",
	});
}

export default Component;

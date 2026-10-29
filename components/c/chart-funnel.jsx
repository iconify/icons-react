import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/iah8-yb-e.css';
import '../../css/g/gr_1y0gbo.css';
import '../../css/l/lt_t22bbi.css';
import '../../css/i/icfyqu0_i.css';
import '../../css/a/aamdi7b5x.css';
import '../../css/z/ze01_acea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="iah8-yb-e wm-shadow"/><path class="gr_1y0gbo"/><path class="lt_t22bbi"/><path class="icfyqu0_i"/><path class="aamdi7b5x wm-shine"/><path class="wm-deco ze01_acea"/></g>`,
		"fallback": "withicons-sticker:chart-funnel",
	});
}

export default Component;

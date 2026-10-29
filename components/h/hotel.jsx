import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/whtpgb5lf.css';
import '../../css/s/sqmxroo0g.css';
import '../../css/n/nvh-4ob-n.css';
import '../../css/i/iytk3wb1v.css';
import '../../css/i/ia962fcgu.css';
import '../../css/b/bu2dhibpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="whtpgb5lf wm-shadow"/><path class="sqmxroo0g"/><path class="nvh-4ob-n"/><path class="iytk3wb1v"/><path class="ia962fcgu wm-shine"/><path class="bu2dhibpu wm-deco"/></g>`,
		"fallback": "withicons-sticker:hotel",
	});
}

export default Component;

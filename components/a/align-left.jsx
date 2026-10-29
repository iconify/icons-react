import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hu__0x3xv.css';
import '../../css/t/ty5tcibcm.css';
import '../../css/h/h8v2qsamg.css';
import '../../css/u/utijjdbik.css';
import '../../css/e/ebgwytbri.css';
import '../../css/h/h_mtm7iui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hu__0x3xv wm-shadow"/><path class="ty5tcibcm"/><path class="h8v2qsamg"/><path class="utijjdbik"/><path class="ebgwytbri wm-shine"/><path class="h_mtm7iui wm-deco"/></g>`,
		"fallback": "withicons-sticker:align-left",
	});
}

export default Component;

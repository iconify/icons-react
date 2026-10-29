import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ixnvy3p6b.css';
import '../../css/v/vve1foi3t.css';
import '../../css/z/zdow_ac7w.css';
import '../../css/f/fa4ypwtib.css';
import '../../css/x/x26liseaf.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ixnvy3p6b wm-shadow"/><path class="vve1foi3t"/><path class="zdow_ac7w"/><path class="fa4ypwtib"/><path class="wm-shine x26liseaf"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:chart-line",
	});
}

export default Component;

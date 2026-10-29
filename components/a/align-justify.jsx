import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/til9qab8e.css';
import '../../css/t/t4p7pljbu.css';
import '../../css/p/py87c4xao.css';
import '../../css/x/xeb6qewzm.css';
import '../../css/e/ebgwytbri.css';
import '../../css/r/rrw0s8brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="til9qab8e wm-shadow"/><path class="t4p7pljbu"/><path class="py87c4xao"/><path class="xeb6qewzm"/><path class="ebgwytbri wm-shine"/><path class="rrw0s8brf wm-deco"/></g>`,
		"fallback": "withicons-sticker:align-justify",
	});
}

export default Component;

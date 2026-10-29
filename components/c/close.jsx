import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jkwsvmi5p.css';
import '../../css/n/nqbaf4b6t.css';
import '../../css/d/dvra5obzx.css';
import '../../css/p/pn-h_uhgo.css';
import '../../css/t/tkux_x6co.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jkwsvmi5p wm-shadow"/><path class="nqbaf4b6t"/><path class="dvra5obzx"/><path class="pn-h_uhgo"/><path class="tkux_x6co wm-shine"/><path class="akvr8ibym wm-deco"/></g>`,
		"fallback": "withicons-sticker:close",
	});
}

export default Component;

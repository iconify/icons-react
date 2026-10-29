import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j9epgdbyc.css';
import '../../css/a/a_i4cbb8t.css';
import '../../css/d/ddrzvzbrm.css';
import '../../css/h/hwljj0bwk.css';
import '../../css/z/zue5atz8s.css';
import '../../css/g/g0nd9h36n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="j9epgdbyc wm-shadow"/><path class="a_i4cbb8t"/><path class="ddrzvzbrm"/><path class="hwljj0bwk"/><path class="wm-shine zue5atz8s"/><path class="g0nd9h36n wm-deco"/></g>`,
		"fallback": "withicons-sticker:chart-bar",
	});
}

export default Component;

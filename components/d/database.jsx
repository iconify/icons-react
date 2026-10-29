import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ojooxmb5n.css';
import '../../css/w/w8fg0mpvs.css';
import '../../css/g/gsx1sj1mp.css';
import '../../css/s/scla-6bfj.css';
import '../../css/m/mwhjhobwp.css';
import '../../css/q/qwbh14bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ojooxmb5n wm-shadow"/><path class="w8fg0mpvs"/><path class="gsx1sj1mp"/><path class="scla-6bfj"/><path class="mwhjhobwp wm-shine"/><path class="qwbh14bjt wm-deco"/></g>`,
		"fallback": "withicons-sticker:database",
	});
}

export default Component;

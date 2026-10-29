import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jy68vfbjn.css';
import '../../css/s/s7msvx5lp.css';
import '../../css/j/jp_38qfsh.css';
import '../../css/t/t_mc37bqt.css';
import '../../css/v/v93dtmbch.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jy68vfbjn wm-shadow"/><path class="s7msvx5lp"/><path class="jp_38qfsh"/><path class="t_mc37bqt"/><path class="v93dtmbch"/><path class="ilvbs_bdh wm-deco"/></g>`,
		"fallback": "withicons-sticker:bold",
	});
}

export default Component;

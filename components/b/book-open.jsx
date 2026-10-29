import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tnv2-7mbf.css';
import '../../css/z/zlaedzsmm.css';
import '../../css/k/kino_kbko.css';
import '../../css/e/ebetatb5h.css';
import '../../css/k/k-be-pbas.css';
import '../../css/i/ic12qmb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tnv2-7mbf wm-shadow"/><path class="zlaedzsmm"/><path class="kino_kbko"/><path class="ebetatb5h"/><path class="k-be-pbas wm-shine"/><path class="ic12qmb9a wm-deco"/></g>`,
		"fallback": "withicons-sticker:book-open",
	});
}

export default Component;

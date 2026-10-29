import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tk59wev6l.css';
import '../../css/s/sydq02bwc.css';
import '../../css/a/aoh6wnqhm.css';
import '../../css/o/o-24k7b5h.css';
import '../../css/v/vyv32nzpa.css';
import '../../css/t/t45uyab2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tk59wev6l wm-shadow"/><path class="sydq02bwc"/><path class="aoh6wnqhm"/><path class="o-24k7b5h"/><path class="vyv32nzpa wm-shine"/><path class="t45uyab2x wm-deco"/></g>`,
		"fallback": "withicons-sticker:book",
	});
}

export default Component;

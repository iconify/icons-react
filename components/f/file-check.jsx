import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/e/e2vy_fbou.css';
import '../../css/a/alrk2xb_n.css';
import '../../css/l/lcg9jbc_r.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="e2vy_fbou"/><path class="alrk2xb_n"/><path class="lcg9jbc_r wm-shine"/><path class="ug799plhe wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-check",
	});
}

export default Component;

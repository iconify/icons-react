import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gutk_w9vv.css';
import '../../css/q/qu4cjfqmf.css';
import '../../css/w/wotccxbib.css';
import '../../css/y/ykk3f0biy.css';
import '../../css/v/va6-6v82i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gutk_w9vv wm-deco"/><path class="qu4cjfqmf wm-deco"/><path class="wm-k wotccxbib"/><path class="wm-a ykk3f0biy"/><path class="va6-6v82i wm-a"/></g>`,
		"fallback": "withicons:folder-open-blueprint",
	});
}

export default Component;

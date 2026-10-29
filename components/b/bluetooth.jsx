import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rytkvijgd.css';
import '../../css/b/bn5oakbvg.css';
import '../../css/l/ltilj8gjv.css';
import '../../css/u/ue-v8fatl.css';
import '../../css/j/jnn3pv-he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rytkvijgd wm-k"/><path class="bn5oakbvg wm-k"/><path class="ltilj8gjv wm-k"/><path class="ue-v8fatl wm-shine"/><path class="jnn3pv-he wm-k"/></g>`,
		"fallback": "withicons-anime:bluetooth",
	});
}

export default Component;

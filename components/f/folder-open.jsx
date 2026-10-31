import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7a-skb_d.css';
import '../../css/i/i1l12gbrg.css';
import '../../css/t/t16a2vbbm.css';
import '../../css/f/fk7l6bzdb.css';
import '../../css/f/f22davn1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7a-skb_d wm-k"/><path class="i1l12gbrg wm-shine"/><path class="t16a2vbbm wm-shine"/><path class="fk7l6bzdb wm-shine"/><path class="f22davn1p wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder-open",
	});
}

export default Component;

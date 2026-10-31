import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_etw1bgz.css';
import '../../css/k/kw_i36beb.css';
import '../../css/r/rogtb_2fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_etw1bgz wm-k"/><path class="kw_i36beb wm-shine"/><path class="rogtb_2fk wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-owl",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fj1bz4bph.css';
import '../../css/g/g78h_ubkd.css';
import '../../css/j/jh_igqb8n.css';
import '../../css/f/f_gq_5bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fj1bz4bph wm-shadow"/><path class="g78h_ubkd wm-shadow"/><path class="jh_igqb8n"/><path class="f_gq_5bhm"/></g>`,
		"fallback": "withicons-brutal:coffee",
	});
}

export default Component;

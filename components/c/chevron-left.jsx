import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aslbu_b_w.css';
import '../../css/d/ds_cs8bbi.css';
import '../../css/s/sp5frqbty.css';
import '../../css/w/was2g0m_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aslbu_b_w wm-shadow"/><path class="ds_cs8bbi wm-shadow"/><path class="sp5frqbty"/><path class="was2g0m_l"/></g>`,
		"fallback": "withicons-brutal:chevron-left",
	});
}

export default Component;

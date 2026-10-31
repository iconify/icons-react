import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vk5i4fbub.css';
import '../../css/o/oi3zr5bto.css';
import '../../css/f/fgmj-mbam.css';
import '../../css/v/v1r0nsbtz.css';
import '../../css/m/m_g5wzc_l.css';
import '../../css/i/ikb8hhbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vk5i4fbub wm-shadow"/><path class="oi3zr5bto"/><path class="fgmj-mbam"/><path class="v1r0nsbtz"/><path class="m_g5wzc_l"/><path class="ikb8hhbsi"/></g>`,
		"fallback": "withicons-retro:bauble",
	});
}

export default Component;

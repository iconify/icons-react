import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vuw-vtbcg.css';
import '../../css/i/ix74hpb0f.css';
import '../../css/m/mrkbx1baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vuw-vtbcg"/><path class="ix74hpb0f"/><path class="mrkbx1baw"/></g>`,
		"fallback": "hugeicons:inbox-unread",
	});
}

export default Component;

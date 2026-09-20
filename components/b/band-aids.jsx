import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfdm24xto.css';
import '../../css/o/oxh8h9afe.css';
import '../../css/s/stj-2q0ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-45 2 8.364)" class="xfdm24xto"/><path class="oxh8h9afe"/><path class="stj-2q0ei"/></g>`,
		"fallback": "majesticons:band-aids",
	});
}

export default Component;

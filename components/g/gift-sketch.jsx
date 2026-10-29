import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-2zzdyrk.css';
import '../../css/r/rmzvr0rnp.css';
import '../../css/l/lvpeqwbwj.css';
import '../../css/l/ldqvx2utm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u-2zzdyrk"/><path class="rmzvr0rnp wm-a"/><path class="lvpeqwbwj wm-k"/><path class="ldqvx2utm wm-a"/></g>`,
		"fallback": "withicons:gift-sketch",
	});
}

export default Component;

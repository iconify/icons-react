import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fbgr70b6s.css';
import '../../css/a/aqr_o8bte.css';
import '../../css/f/fyt1i_b0a.css';
import '../../css/y/yx3k_2kij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fbgr70b6s wm-shadow"/><path class="aqr_o8bte"/><path class="fyt1i_b0a"/><path class="yx3k_2kij"/></g>`,
		"fallback": "withicons-retro:golf",
	});
}

export default Component;

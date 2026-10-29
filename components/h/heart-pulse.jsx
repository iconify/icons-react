import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1--morsm.css';
import '../../css/j/j60iceery.css';
import '../../css/f/fzv5kzb_p.css';
import '../../css/g/g6kl2pbhn.css';
import '../../css/i/i16sgj3sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1--morsm wm-k"/><path class="j60iceery wm-k"/><path class="fzv5kzb_p wm-k"/><path class="g6kl2pbhn wm-shine"/><path class="i16sgj3sm wm-a"/></g>`,
		"fallback": "withicons-anime:heart-pulse",
	});
}

export default Component;

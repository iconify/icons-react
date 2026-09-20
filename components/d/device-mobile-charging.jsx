import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6l2v_boj.css';
import '../../css/c/cih-4sjfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i6l2v_boj"/><path class="cih-4sjfm"/></g>`,
		"fallback": "tabler:device-mobile-charging",
	});
}

export default Component;

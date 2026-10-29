import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nf1sxrb8v.css';
import '../../css/f/fmyq8ctie.css';
import '../../css/z/zi3qf8bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nf1sxrb8v"/><path class="fmyq8ctie wm-k"/><path class="wm-a zi3qf8bqd"/></g>`,
		"fallback": "withicons:candy-cane-sketch",
	});
}

export default Component;

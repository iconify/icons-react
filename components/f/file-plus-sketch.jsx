import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hsqhbfcjf.css';
import '../../css/o/oyv0mybyv.css';
import '../../css/k/knxdme06z.css';
import '../../css/o/o8l__-5ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hsqhbfcjf"/><path class="oyv0mybyv wm-a"/><path class="knxdme06z wm-k"/><path class="o8l__-5ww wm-a"/></g>`,
		"fallback": "withicons:file-plus-sketch",
	});
}

export default Component;

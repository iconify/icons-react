import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ac4w-4l8x.css';
import '../../css/c/crugkkdfe.css';
import '../../css/f/ffmjv2bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ac4w-4l8x"/><path class="crugkkdfe wm-k"/><path class="ffmjv2bzj wm-a"/></g>`,
		"fallback": "withicons:avatar-koala-sketch",
	});
}

export default Component;

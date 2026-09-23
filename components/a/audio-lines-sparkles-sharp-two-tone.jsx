import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hb0q4-uhx.css';
import '../../css/h/h8a5dda0k.css';
import '../../css/i/ik2waybte.css';
import '../../css/h/hdhpu_gyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hb0q4-uhx"/><path class="h8a5dda0k"/><path class="ik2waybte"/><path class="hdhpu_gyn"/></g>`,
		"fallback": "keyline-icons:audio-lines-sparkles-sharp-two-tone",
	});
}

export default Component;

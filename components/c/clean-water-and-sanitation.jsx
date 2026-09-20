import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw23q9buk.css';
import '../../css/p/pq8n_sb_i.css';
import '../../css/w/w2aonhxkk.css';
import '../../css/s/s9f2x7bmu.css';
import '../../css/x/xvd8m6blm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uw23q9buk"/><path class="pq8n_sb_i"/><path class="w2aonhxkk"/><path class="s9f2x7bmu"/><path class="xvd8m6blm"/></g>`,
		"fallback": "streamline-color:clean-water-and-sanitation",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8bw2vbip.css';
import '../../css/n/nd570gmzi.css';
import '../../css/q/qh3u8dbeh.css';
import '../../css/v/vdemiccmt.css';
import '../../css/h/h8fyxwcfu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8bw2vbip"/><path class="nd570gmzi"/><path class="qh3u8dbeh"/><path class="vdemiccmt"/><path class="h8fyxwcfu"/></g>`,
		"fallback": "streamline-color:ai-gaming-spark",
	});
}

export default Component;

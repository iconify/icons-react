import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgph-6qhf.css';
import '../../css/x/x_yy70hej.css';
import '../../css/q/qogmsja6e.css';
import '../../css/w/wfnzhac1q.css';
import '../../css/i/icm2ncbjw.css';
import '../../css/y/yec_4bs8z.css';
import '../../css/n/n82fabcrf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fgph-6qhf"/><path class="x_yy70hej"/><path class="qogmsja6e"/><path class="wfnzhac1q"/><path class="icm2ncbjw"/><path class="yec_4bs8z"/><path class="n82fabcrf"/></g>`,
		"fallback": "fluent-emoji-flat:badminton",
	});
}

export default Component;

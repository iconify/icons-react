import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqhe39_lk.css';
import '../../css/g/g3hxb2bcp.css';
import '../../css/f/fpfjyjotr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sqhe39_lk"/><path class="g3hxb2bcp"/><path class="fpfjyjotr"/></g>`,
		"fallback": "fluent-emoji-flat:admission-tickets",
	});
}

export default Component;

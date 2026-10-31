import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rew12ibrb.css';
import '../../css/p/p5h09mb4q.css';
import '../../css/i/in5rf9n_o.css';
import '../../css/k/kzbeqwbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rew12ibrb wm-shadow"/><path class="p5h09mb4q wm-shadow"/><path class="in5rf9n_o"/><path class="kzbeqwbdb"/></g>`,
		"fallback": "withicons-brutal:avatar-bunny",
	});
}

export default Component;

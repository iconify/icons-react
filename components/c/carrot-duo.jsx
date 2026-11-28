import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj3ugqhvs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ett11-bch.css';
import '../../css/w/ws2q1my1b.css';
import '../../css/h/hjp5ozb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sj3ugqhvs"/><g class="dt0cm9dhy primary"><path class="ett11-bch"/><path class="ws2q1my1b"/><path class="hjp5ozb1w"/></g>`,
		"fallback": "iconaut:carrot-duo",
	});
}

export default Component;

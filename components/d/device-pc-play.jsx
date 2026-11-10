import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1zak69zh.css';
import '../../css/p/pjpf1q9ly.css';
import '../../css/k/ke4ggnjdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i1zak69zh"/><path class="pjpf1q9ly"/><path class="ke4ggnjdh"/></g>`,
		"fallback": "andrsrxn:device-pc-play",
	});
}

export default Component;

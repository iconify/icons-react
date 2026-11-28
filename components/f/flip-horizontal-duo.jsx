import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v84_akkuy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uijgoup2v.css';
import '../../css/i/i1u2bqb_t.css';
import '../../css/r/rqwm_hbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v84_akkuy"/><g class="dt0cm9dhy primary"><path class="uijgoup2v"/><path class="i1u2bqb_t"/><path class="rqwm_hbww"/></g>`,
		"fallback": "iconaut:flip-horizontal-duo",
	});
}

export default Component;

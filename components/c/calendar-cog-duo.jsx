import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-z-8cbdk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k4-c7ob6h.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/c/cr_e15nvj.css';
import '../../css/i/inrbfm-8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-z-8cbdk secondary"/><g class="dt0cm9dhy primary"><path class="k4-c7ob6h"/><path class="w7_mhrwuu"/><path class="cr_e15nvj"/><path class="inrbfm-8h"/></g>`,
		"fallback": "iconaut:calendar-cog-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs0n83b1m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qyvn42bbq.css';
import '../../css/t/t8x-nbhsm.css';
import '../../css/c/cxy8b7bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs0n83b1m secondary"/><g class="dt0cm9dhy primary"><path class="qyvn42bbq"/><path class="t8x-nbhsm"/><path class="cxy8b7bmh"/></g>`,
		"fallback": "iconaut:diamond-alert-duo",
	});
}

export default Component;

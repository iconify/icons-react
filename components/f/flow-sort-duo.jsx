import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs0n83b1m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qyvn42bbq.css';
import '../../css/b/bvxf3kbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs0n83b1m secondary"/><g class="dt0cm9dhy primary"><path class="qyvn42bbq"/><path class="bvxf3kbfj"/></g>`,
		"fallback": "iconaut:flow-sort-duo",
	});
}

export default Component;

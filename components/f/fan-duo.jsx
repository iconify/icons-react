import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8ieiqb6s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ouksjkhgu.css';
import '../../css/k/kzdo11hxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8ieiqb6s secondary"/><g class="dt0cm9dhy primary"><path class="ouksjkhgu"/><path class="kzdo11hxn"/></g>`,
		"fallback": "iconaut:fan-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f-72ljw4x.css';
import '../../css/j/joz8m6uoh.css';
import '../../css/h/hp8nadcvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f-72ljw4x"/><path class="joz8m6uoh"/><path class="hp8nadcvj"/></g>`,
		"fallback": "iconaut:coffee",
	});
}

export default Component;

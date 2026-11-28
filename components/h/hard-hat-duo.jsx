import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsg33_bdr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k13rehn4f.css';
import '../../css/l/l1-9_tb1s.css';
import '../../css/d/dru2d75ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wsg33_bdr"/><g class="dt0cm9dhy primary"><path class="k13rehn4f"/><path class="l1-9_tb1s"/><path class="dru2d75ul"/></g>`,
		"fallback": "iconaut:hard-hat-duo",
	});
}

export default Component;

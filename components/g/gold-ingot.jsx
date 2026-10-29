import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/un6g0p8cw.css';
import '../../css/f/fjtiwkodd.css';
import '../../css/x/x_rm9u1ba.css';
import '../../css/a/art9oydhg.css';
import '../../css/d/dt5qoccsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="un6g0p8cw"/><path class="fjtiwkodd"/><path class="x_rm9u1ba"/><path class="art9oydhg wm-a"/><path class="dt5qoccsj wm-a"/></g>`,
		"fallback": "withicons:gold-ingot",
	});
}

export default Component;

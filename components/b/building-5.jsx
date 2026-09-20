import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yoy2mfzob.css';
import '../../css/i/i93envxxw.css';
import '../../css/o/o6kx8dqms.css';
import '../../css/j/jrn5i8bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yoy2mfzob"/><path class="i93envxxw"/><path class="o6kx8dqms"/><path class="jrn5i8bdy"/></g>`,
		"fallback": "tdesign:building-5",
	});
}

export default Component;

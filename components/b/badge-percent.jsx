import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8itr8l-v.css';
import '../../css/l/lw94e4bci.css';
import '../../css/p/pwm960b_x.css';
import '../../css/o/o6nqylbgn.css';
import '../../css/k/krqvq8bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8itr8l-v wm-k"/><path class="lw94e4bci wm-k"/><path class="pwm960b_x wm-k"/><path class="o6nqylbgn wm-shine"/><path class="krqvq8bsd wm-a"/></g>`,
		"fallback": "withicons-anime:badge-percent",
	});
}

export default Component;

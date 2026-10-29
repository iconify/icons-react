import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r82cqdbfv.css';
import '../../css/r/rtaxnab3y.css';
import '../../css/x/xjkl9gbnj.css';
import '../../css/c/c3puseb3z.css';
import '../../css/r/ri487s-_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r82cqdbfv wm-k"/><path class="rtaxnab3y wm-k"/><path class="wm-k xjkl9gbnj"/><path class="c3puseb3z wm-shine"/><path class="ri487s-_a wm-a"/></g>`,
		"fallback": "withicons-anime:badge-alert",
	});
}

export default Component;

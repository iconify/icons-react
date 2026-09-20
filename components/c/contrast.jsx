import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/w/wxjteacgc.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/d/d0gm0nf1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="wxjteacgc"/><path class="fo4ccr_rl"/><path class="d0gm0nf1b"/></g>`,
		"fallback": "tdesign:contrast",
	});
}

export default Component;

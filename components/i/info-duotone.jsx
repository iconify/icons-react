import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvsj4rbkk.css';
import '../../css/z/zoo2tsb9c.css';
import '../../css/l/lbggvqluq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yvsj4rbkk"/><path class="zoo2tsb9c"/><path class="lbggvqluq"/></g>`,
		"fallback": "lets-icons:info-duotone",
	});
}

export default Component;

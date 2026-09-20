import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr_c-4klg.css';
import '../../css/y/y73y0p4rq.css';
import '../../css/a/a4dfgjbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rr_c-4klg"/><path class="y73y0p4rq"/><path class="a4dfgjbai"/></g>`,
		"fallback": "streamline-cyber-color:book-pencil",
	});
}

export default Component;

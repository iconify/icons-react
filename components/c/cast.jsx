import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yfr2y5n3b.css';
import '../../css/o/o38mptbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yfr2y5n3b"/><path class="o38mptbie wm-a"/></g>`,
		"fallback": "withicons:cast",
	});
}

export default Component;

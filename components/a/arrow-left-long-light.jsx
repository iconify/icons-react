import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnfnsh1he.css';
import '../../css/x/xhp6elv4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nnfnsh1he"/><path class="xhp6elv4l"/></g>`,
		"fallback": "lets-icons:arrow-left-long-light",
	});
}

export default Component;

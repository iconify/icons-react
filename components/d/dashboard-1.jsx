import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy-6zub_e.css';
import '../../css/s/s4wgxebit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jy-6zub_e"/><path class="s4wgxebit"/></g>`,
		"fallback": "tdesign:dashboard-1",
	});
}

export default Component;

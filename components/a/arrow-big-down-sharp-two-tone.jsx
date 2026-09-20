import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e9e3jt7fz.css';
import '../../css/o/o7v31mbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e9e3jt7fz"/><path class="o7v31mbxc"/></g>`,
		"fallback": "keyline-icons:arrow-big-down-sharp-two-tone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opksrfbgr.css';
import '../../css/p/p744pnhqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="opksrfbgr"/><path class="p744pnhqi"/></g>`,
		"fallback": "lets-icons:import-duotone",
	});
}

export default Component;

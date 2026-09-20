import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/sm_nmlb9u.css';
import '../../css/y/ye-rmuoxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="sm_nmlb9u"/><path class="ye-rmuoxl"/></g>`,
		"fallback": "streamline-ultimate:aerial-yogabasic-inversion-pose",
	});
}

export default Component;

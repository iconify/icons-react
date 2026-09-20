import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmtd97p-m.css';
import '../../css/q/qeed53eod.css';
import '../../css/s/sg7qc6c0s.css';
import '../../css/c/chm0bvbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dmtd97p-m"/><path class="qeed53eod"/><path class="sg7qc6c0s"/><path class="chm0bvbcm"/></g>`,
		"fallback": "tdesign:building-2",
	});
}

export default Component;

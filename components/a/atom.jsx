import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syxm8vhcq.css';
import '../../css/u/uk3f4f7mc.css';
import '../../css/v/vftmcwbye.css';
import '../../css/h/htfiozbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="syxm8vhcq"/><path class="uk3f4f7mc"/><path class="vftmcwbye"/><path class="htfiozbhc"/></g>`,
		"fallback": "andrsrxn:atom",
	});
}

export default Component;

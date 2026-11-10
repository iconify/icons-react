import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w69pz5srx.css';
import '../../css/y/yg68qf0_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w69pz5srx"/><path class="yg68qf0_r"/></g>`,
		"fallback": "andrsrxn:film-x",
	});
}

export default Component;

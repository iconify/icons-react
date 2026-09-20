import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vv1-bc7dp.css';
import '../../css/h/ho7smwbzh.css';
import '../../css/q/q9mvo8b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vv1-bc7dp"/><path class="ho7smwbzh"/><circle class="q9mvo8b1r"/></g>`,
		"fallback": "proicons:info-square",
	});
}

export default Component;

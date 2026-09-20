import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krxx9w6ae.css';
import '../../css/o/oy96-vbht.css';
import '../../css/x/x4k8psbcc.css';
import '../../css/u/u_x94ac-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="krxx9w6ae"/><path class="oy96-vbht"/><path class="x4k8psbcc"/><path class="u_x94ac-s"/></g>`,
		"fallback": "streamline-ultimate-color:gift-box-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysm5fubke.css';
import '../../css/w/wk2ymwbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ysm5fubke"/><path class="wk2ymwbdw"/></g>`,
		"fallback": "tdesign:flight-landing",
	});
}

export default Component;

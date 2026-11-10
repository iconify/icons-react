import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m19kf-rng.css';
import '../../css/w/wc_jt3bzf.css';
import '../../css/l/lvofx6bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m19kf-rng"/><path class="wc_jt3bzf"/><path class="lvofx6bun"/></g>`,
		"fallback": "andrsrxn:device-phone-in",
	});
}

export default Component;

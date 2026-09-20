import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzi5jpiyt.css';
import '../../css/q/qirpgzb7b.css';
import '../../css/p/p5hg2wbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzi5jpiyt"/><path class="qirpgzb7b"/><path class="p5hg2wbjn"/></g>`,
		"fallback": "tdesign:coupon",
	});
}

export default Component;

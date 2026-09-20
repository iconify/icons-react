import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5rl6d9jn.css';
import '../../css/e/eof3lkbhp.css';
import '../../css/w/w2qbg1srf.css';
import '../../css/q/qvsov4fod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k5rl6d9jn"/><path class="eof3lkbhp"/><path class="w2qbg1srf"/><path class="qvsov4fod"/></g>`,
		"fallback": "tdesign:guitar",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2qqm-b8j.css';
import '../../css/x/xkdokkb5x.css';
import '../../css/r/reyjw4bwg.css';
import '../../css/g/gn5xo6xpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i2qqm-b8j"/><path class="xkdokkb5x"/><path class="reyjw4bwg"/><path class="gn5xo6xpf"/></g>`,
		"fallback": "andrsrxn:image-square",
	});
}

export default Component;

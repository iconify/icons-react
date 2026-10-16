import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmz-t6bds.css';
import '../../css/c/cns4skbwo.css';
import '../../css/y/yk3u9fp8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lmz-t6bds"/><path class="cns4skbwo"/><path class="yk3u9fp8e"/></g>`,
		"fallback": "andrsrxn:file-sparkle",
	});
}

export default Component;

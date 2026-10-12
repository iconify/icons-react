import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibv6hzb4r.css';
import '../../css/a/abeej9bqt.css';
import '../../css/e/ea35x-9-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ibv6hzb4r"/><path class="abeej9bqt"/><path class="ea35x-9-k"/></g>`,
		"fallback": "andrsrxn:file-star",
	});
}

export default Component;

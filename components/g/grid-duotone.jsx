import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfbbd1bmk.css';
import '../../css/q/q8qr-0bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfbbd1bmk"/><path class="q8qr-0bai"/></g>`,
		"fallback": "si:grid-duotone",
	});
}

export default Component;

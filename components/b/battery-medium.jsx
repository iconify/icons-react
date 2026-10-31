import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e8mb1rodb.css';
import '../../css/o/ovj0xkbhz.css';
import '../../css/v/vdsf7ym-k.css';
import '../../css/z/z7i-fgp5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e8mb1rodb wm-shadow"/><path class="ovj0xkbhz"/><path class="vdsf7ym-k"/><path class="z7i-fgp5i"/></g>`,
		"fallback": "withicons-retro:battery-medium",
	});
}

export default Component;

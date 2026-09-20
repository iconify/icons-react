import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbip4acpr.css';
import '../../css/l/l8vstnbtr.css';
import '../../css/k/kyhd0b60t.css';
import '../../css/h/h27wz8b3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vbip4acpr"/><path class="l8vstnbtr"/><path class="kyhd0b60t"/><path class="h27wz8b3f"/></g>`,
		"fallback": "streamline-flex-color:align-selection",
	});
}

export default Component;

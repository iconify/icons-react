import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ii7ckzbik.css';
import '../../css/d/dyfkqxb3f.css';
import '../../css/o/o5yb9qrva.css';
import '../../css/i/i6h-z_bao.css';
import '../../css/g/g2ev5qkyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ii7ckzbik wm-k"/><path class="dyfkqxb3f wm-a"/><path class="o5yb9qrva"/><path class="i6h-z_bao"/><path class="g2ev5qkyw wm-s"/></g>`,
		"fallback": "withicons-bauhaus:alarm-clock-check",
	});
}

export default Component;

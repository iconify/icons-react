import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oz-gyro2d.css';
import '../../css/x/xeg3pnzfc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oz-gyro2d"/><path class="xeg3pnzfc"/></g>`,
		"fallback": "streamline:checkup-medical-report-clipboard",
	});
}

export default Component;

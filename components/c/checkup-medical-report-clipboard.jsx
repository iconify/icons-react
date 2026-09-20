import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vdipclbfd.css';
import '../../css/t/t3hcrzp8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vdipclbfd"/><path class="t3hcrzp8r"/></g>`,
		"fallback": "streamline-flex:checkup-medical-report-clipboard",
	});
}

export default Component;

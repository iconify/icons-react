import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e1ho-ybli.css';
import '../../css/v/vog69kbfc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e1ho-ybli"/><path class="vog69kbfc"/></g>`,
		"fallback": "streamline:browser-multiple-window",
	});
}

export default Component;

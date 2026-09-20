import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ksd6lacpf.css';
import '../../css/f/faawmibnk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ksd6lacpf"/><path class="faawmibnk"/></g>`,
		"fallback": "streamline-color:call-center-support-service",
	});
}

export default Component;

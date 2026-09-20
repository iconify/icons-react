import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e8q0bbbsn.css';
import '../../css/e/e23v41bjy.css';
import '../../css/j/jt1tzxb3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e8q0bbbsn"/><path class="e23v41bjy"/><path class="jt1tzxb3y"/></g>`,
		"fallback": "streamline:decent-work-and-economic-growth",
	});
}

export default Component;

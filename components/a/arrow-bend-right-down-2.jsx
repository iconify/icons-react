import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jcm163ggr.css';
import '../../css/c/cr1l6rb1j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jcm163ggr"/><path class="cr1l6rb1j"/></g>`,
		"fallback": "streamline:arrow-bend-right-down-2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktbc2fn9o.css';
import '../../css/c/c12rmobxw.css';
import '../../css/b/bzbnxuzxv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktbc2fn9o"/><path class="c12rmobxw"/><path class="bzbnxuzxv"/></g>`,
		"fallback": "streamline-flex-color:cloud",
	});
}

export default Component;

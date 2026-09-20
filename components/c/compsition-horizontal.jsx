import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jt2tefwha.css';
import '../../css/k/kp4keq91t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jt2tefwha"/><path class="kp4keq91t"/></g>`,
		"fallback": "streamline-flex-color:compsition-horizontal",
	});
}

export default Component;

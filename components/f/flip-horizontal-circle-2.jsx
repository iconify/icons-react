import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsd-bpmxp.css';
import '../../css/j/jqo9rs4xn.css';
import '../../css/m/murw7l32r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qsd-bpmxp"/><path class="jqo9rs4xn"/><path class="murw7l32r"/></g>`,
		"fallback": "streamline-flex-color:flip-horizontal-circle-2",
	});
}

export default Component;

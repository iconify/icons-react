import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsujmbbnq.css';
import '../../css/h/h5vt7unnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jsujmbbnq"/><path class="h5vt7unnn"/></g>`,
		"fallback": "streamline-color:brain-cognitive-flat",
	});
}

export default Component;

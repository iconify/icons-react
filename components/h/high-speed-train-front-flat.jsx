import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q3r7l856c.css';
import '../../css/f/frvb35qqr.css';
import '../../css/h/h0aue6b3g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q3r7l856c"/><path class="frvb35qqr"/><path class="h0aue6b3g"/></g>`,
		"fallback": "streamline-color:high-speed-train-front-flat",
	});
}

export default Component;

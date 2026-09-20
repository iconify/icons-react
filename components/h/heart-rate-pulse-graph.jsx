import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kqx6-cc.css';
import '../../css/c/cgk8zus5u.css';
import '../../css/s/soligzbuu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x1kqx6-cc"/><path class="cgk8zus5u"/><path class="soligzbuu"/></g>`,
		"fallback": "streamline-color:heart-rate-pulse-graph",
	});
}

export default Component;

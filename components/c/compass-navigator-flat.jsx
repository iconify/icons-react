import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbt3mvbav.css';
import '../../css/a/are7vqsqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbt3mvbav"/><path class="are7vqsqn"/></g>`,
		"fallback": "streamline-plump-color:compass-navigator-flat",
	});
}

export default Component;

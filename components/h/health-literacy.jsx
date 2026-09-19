import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qqs17ca8b.css';
import '../../css/i/i3s65dbvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qqs17ca8b"/><path clip-rule="evenodd" class="i3s65dbvo"/></g>`,
		"fallback": "healthicons:health-literacy",
	});
}

export default Component;

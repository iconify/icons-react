import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7y4rmcqj.css';
import '../../css/b/b7k4_bbom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y7y4rmcqj"/><path clip-rule="evenodd" class="b7k4_bbom"/></g>`,
		"fallback": "healthicons:animal-cow2x-outline",
	});
}

export default Component;

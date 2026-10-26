import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghdbiy5at.css';
import '../../css/e/eht5feeye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ghdbiy5at"/><path class="eht5feeye"/></g>`,
		"fallback": "healthicons:happy-sleepy",
	});
}

export default Component;

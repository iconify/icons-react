import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oz_q5um7a.css';
import '../../css/g/ge5wqcccf.css';
import '../../css/q/qs--2tbzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oz_q5um7a"/><path class="ge5wqcccf"/><path clip-rule="evenodd" class="qs--2tbzr"/></g>`,
		"fallback": "healthicons:clean-hands2x-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhegjbgei.css';
import '../../css/c/cm2goxb8k.css';
import '../../css/r/rkhkfhe6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jhegjbgei"/><path clip-rule="evenodd" class="cm2goxb8k"/><path clip-rule="evenodd" class="rkhkfhe6x"/></g>`,
		"fallback": "healthicons:diabetes-measure-24px",
	});
}

export default Component;

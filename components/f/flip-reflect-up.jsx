import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eizdr2f_d.css';
import '../../css/q/qzcstj6ya.css';
import '../../css/v/voplo8xtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eizdr2f_d"/><path class="qzcstj6ya"/><path class="voplo8xtw"/></g>`,
		"fallback": "streamline-freehand-color:flip-reflect-up",
	});
}

export default Component;

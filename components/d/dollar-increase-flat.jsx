import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cabm_1tmg.css';
import '../../css/b/bbj8g4uau.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cabm_1tmg"/><path class="bbj8g4uau"/></g>`,
		"fallback": "streamline-flex-color:dollar-increase-flat",
	});
}

export default Component;

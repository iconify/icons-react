import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sga2n-bem.css';
import '../../css/o/ofu4_kjlw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sga2n-bem"/><path class="ofu4_kjlw"/></g>`,
		"fallback": "streamline-color:arrow-up-dashed-square-flat",
	});
}

export default Component;

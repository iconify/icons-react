import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nbp7ntfnj.css';
import '../../css/a/a1l25tbpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nbp7ntfnj"/><path class="a1l25tbpg"/></g>`,
		"fallback": "streamline-color:discount-percent-cutout-flat",
	});
}

export default Component;

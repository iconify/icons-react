import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bozkrsgab.css';
import '../../css/k/ktm5gpipo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bozkrsgab"/><path class="ktm5gpipo"/></g>`,
		"fallback": "streamline-color:braces-circle-flat",
	});
}

export default Component;

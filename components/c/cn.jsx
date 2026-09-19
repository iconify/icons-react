import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ctew7ohvk.css';
import '../../css/i/iqpqw2fbr.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ctew7ohvk"/><path class="iqpqw2fbr"/></g>`,
		"fallback": "flagpack:cn",
	});
}

export default Component;

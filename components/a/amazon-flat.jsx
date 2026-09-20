import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z8ctbb5fd.css';
import '../../css/h/h2b9ngb2k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z8ctbb5fd"/><path class="h2b9ngb2k"/></g>`,
		"fallback": "streamline-color:amazon-flat",
	});
}

export default Component;

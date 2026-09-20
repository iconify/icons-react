import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6oqjti9j.css';
import '../../css/w/w8-o1rbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r6oqjti9j"/><path class="w8-o1rbfn"/></g>`,
		"fallback": "lucide:brush",
	});
}

export default Component;

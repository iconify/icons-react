import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o7go62bvs.css';
import '../../css/r/r74jfkeku.css';
import '../../css/w/wtwsfcbkl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o7go62bvs"/><path class="r74jfkeku"/><path class="wtwsfcbkl"/></g>`,
		"fallback": "pepicons:arrow-right",
	});
}

export default Component;

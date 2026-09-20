import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rvjj7k94w.css';
import '../../css/t/t19_b8fqy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rvjj7k94w"/><path class="t19_b8fqy"/></g>`,
		"fallback": "pepicons-pencil:car",
	});
}

export default Component;

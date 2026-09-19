import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ggje0l_lo.css';
import '../../css/j/jud9t-_4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ggje0l_lo"/><path class="jud9t-_4k"/></g>`,
		"fallback": "pepicons:cloud-print",
	});
}

export default Component;

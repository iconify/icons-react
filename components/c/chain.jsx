import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f0ca31jqh.css';
import '../../css/z/zmz_fq_6a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f0ca31jqh"/><path class="zmz_fq_6a"/></g>`,
		"fallback": "pepicons-pencil:chain",
	});
}

export default Component;

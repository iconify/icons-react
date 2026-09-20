import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rb-o8cv-x.css';
import '../../css/w/w0no062rh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rb-o8cv-x"/><path class="w0no062rh"/></g>`,
		"fallback": "pepicons-pencil:flag-straight",
	});
}

export default Component;

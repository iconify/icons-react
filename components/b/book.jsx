import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zci0-sn6j.css';
import '../../css/n/nuv4bub9l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zci0-sn6j"/><path class="nuv4bub9l"/></g>`,
		"fallback": "pepicons:book",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yyfkkuvmx.css';
import '../../css/l/llejwoqny.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yyfkkuvmx"/><path class="llejwoqny"/></g>`,
		"fallback": "heroicons-solid:arrow-top-right-on-square",
	});
}

export default Component;

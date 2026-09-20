import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gtyn32zwx.css';
import '../../css/c/cjzjnwcsl.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gtyn32zwx"/><path class="cjzjnwcsl"/></g>`,
		"fallback": "lineicons:gear-1",
	});
}

export default Component;

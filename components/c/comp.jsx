import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vishu4bqv.css';
import '../../css/p/p8gyajp0q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="vishu4bqv"/><path class="p8gyajp0q"/></g>`,
		"fallback": "cryptocurrency-color:comp",
	});
}

export default Component;

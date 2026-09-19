import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/liefk1bya.css';
import '../../css/n/nwooszp6x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="liefk1bya"/><path class="nwooszp6x"/></g>`,
		"fallback": "cryptocurrency-color:dat",
	});
}

export default Component;

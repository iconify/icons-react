import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ky84xabzx.css';
import '../../css/c/c8r5gybum.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ky84xabzx"/><path class="c8r5gybum"/></g>`,
		"fallback": "cryptocurrency-color:html",
	});
}

export default Component;

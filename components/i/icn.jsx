import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wdi66abgo.css';
import '../../css/z/z6no5nfgl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="wdi66abgo"/><path class="z6no5nfgl"/></g>`,
		"fallback": "cryptocurrency-color:icn",
	});
}

export default Component;

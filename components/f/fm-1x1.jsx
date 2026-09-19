import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoyn5x1dl.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/e3pg-k-br.css';
import '../../css/l/l8bjx0nkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGUzxffciU"><path class="qoyn5x1dl"/></clipPath></defs><g clip-path="url(#SVGUzxffciU)" transform="translate(-252)scale(1.032)" class="nv9qcacyl"><path class="e3pg-k-br"/><path class="l8bjx0nkx"/></g>`,
		"fallback": "flag:fm-1x1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x07qr5bdm.css';
import '../../css/q/qhxtzjb3c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="x07qr5bdm"/><path class="qhxtzjb3c"/></g>`,
		"fallback": "cryptocurrency-color:gvt",
	});
}

export default Component;

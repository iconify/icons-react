import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l-v5anbse.css';
import '../../css/q/qv7n5va-r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="l-v5anbse"/><path class="qv7n5va-r"/></g>`,
		"fallback": "cryptocurrency-color:blcn",
	});
}

export default Component;

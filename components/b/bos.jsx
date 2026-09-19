import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o5kxgqo1l.css';
import '../../css/m/mkpnpuify.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="o5kxgqo1l"/><path class="mkpnpuify"/></g>`,
		"fallback": "cryptocurrency-color:bos",
	});
}

export default Component;

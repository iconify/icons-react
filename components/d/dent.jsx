import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vv_oe0bxd.css';
import '../../css/x/xnpwbqvsp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="vv_oe0bxd"/><path class="xnpwbqvsp"/></g>`,
		"fallback": "cryptocurrency-color:dent",
	});
}

export default Component;

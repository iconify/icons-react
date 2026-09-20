import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/z/zl_pvgz9v.css';
import '../../css/p/pi-o0dbdb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="zl_pvgz9v"/><path class="pi-o0dbdb"/></g>`,
		"fallback": "system-uicons:box-download",
	});
}

export default Component;

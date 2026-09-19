import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq_rlaczy.css';
import '../../css/j/j-b8pcbum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq_rlaczy"/><path class="j-b8pcbum"/>`,
		"fallback": "cil:cloud-upload",
	});
}

export default Component;

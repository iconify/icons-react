import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r_jvssb2k.css';
import '../../css/k/kvcgl2_0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r_jvssb2k"/><path class="kvcgl2_0b"/></g>`,
		"fallback": "streamline-flex-color:download-tray-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pqsi_ktvn.css';
import '../../css/u/uya2_6bos.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pqsi_ktvn"/><path class="uya2_6bos"/></g>`,
		"fallback": "streamline-color:auto-flash-flat",
	});
}

export default Component;

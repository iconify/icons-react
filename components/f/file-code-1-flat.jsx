import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sqm-mcdcf.css';
import '../../css/m/moz-j_b1x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sqm-mcdcf"/><path class="moz-j_b1x"/></g>`,
		"fallback": "streamline-flex-color:file-code-1-flat",
	});
}

export default Component;

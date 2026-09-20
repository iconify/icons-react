import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cs8-gbclr.css';
import '../../css/n/nodnmtb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cs8-gbclr"/><path class="nodnmtb9w"/></g>`,
		"fallback": "tdesign:cursor",
	});
}

export default Component;

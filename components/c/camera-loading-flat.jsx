import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lzka2jbbv.css';
import '../../css/a/apcpfwnpt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lzka2jbbv"/><path class="apcpfwnpt"/></g>`,
		"fallback": "streamline-color:camera-loading-flat",
	});
}

export default Component;

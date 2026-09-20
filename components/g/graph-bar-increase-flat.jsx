import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m2e5stbvq.css';
import '../../css/x/x3ahgacsc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m2e5stbvq"/><path class="x3ahgacsc"/></g>`,
		"fallback": "streamline-color:graph-bar-increase-flat",
	});
}

export default Component;

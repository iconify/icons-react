import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bjl2y6b8n.css';
import '../../css/s/sadhv6bes.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bjl2y6b8n"/><path class="sadhv6bes"/></g>`,
		"fallback": "streamline-color:camera-square-flat",
	});
}

export default Component;

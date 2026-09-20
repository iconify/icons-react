import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlb5oebrf.css';
import '../../css/j/j60gaobdi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hlb5oebrf"/><path clip-rule="evenodd" class="j60gaobdi"/></g>`,
		"fallback": "streamline-flex-color:heart-rate-flat",
	});
}

export default Component;

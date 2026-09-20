import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/cvcfidcqc.css';
import '../../css/r/rvl5ncc5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="cvcfidcqc"/><path class="rvl5ncc5t"/></g>`,
		"fallback": "streamline-plump-color:fork-knife",
	});
}

export default Component;

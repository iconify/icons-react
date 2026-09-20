import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e1dc4kxno.css';
import '../../css/z/zor11obzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e1dc4kxno"/><path class="zor11obzi"/></g>`,
		"fallback": "lucide:bookmark-check",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1-_05cxh.css';
import '../../css/e/e3-ekfbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p1-_05cxh"/><path class="e3-ekfbhp"/></g>`,
		"fallback": "lucide-lab:football",
	});
}

export default Component;

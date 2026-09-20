import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o024t7blj.css';
import '../../css/u/uzm9126hk.css';
import '../../css/q/qx-40pbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o024t7blj"/><path class="uzm9126hk"/><path class="qx-40pbsd"/></g>`,
		"fallback": "lucide:dog",
	});
}

export default Component;

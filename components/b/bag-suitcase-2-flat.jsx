import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvy6yxdso.css';
import '../../css/a/ah4dkhbeo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xvy6yxdso"/><path class="ah4dkhbeo"/></g>`,
		"fallback": "streamline-color:bag-suitcase-2-flat",
	});
}

export default Component;

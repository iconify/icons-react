import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ea2d71bzx.css';
import '../../css/e/e8pwbwbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ea2d71bzx"/><path class="e8pwbwbfv"/></g>`,
		"fallback": "solar:history-3-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9zjytb8k.css';
import '../../css/q/qcmlopf1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9zjytb8k"/><path class="qcmlopf1w"/>`,
		"fallback": "lets-icons:fire-duotone-line",
	});
}

export default Component;

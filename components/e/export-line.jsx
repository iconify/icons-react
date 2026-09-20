import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av8tbab7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av8tbab7j"/>`,
		"fallback": "ri:export-line",
	});
}

export default Component;

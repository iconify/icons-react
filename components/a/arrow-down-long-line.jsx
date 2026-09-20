import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql9f2lbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql9f2lbfd"/>`,
		"fallback": "ri:arrow-down-long-line",
	});
}

export default Component;

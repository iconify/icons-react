import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riad1mbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riad1mbxn"/>`,
		"fallback": "mynaui:chart-pie",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwrs7pbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwrs7pbyk"/>`,
		"fallback": "mynaui:chart-bar-increasing",
	});
}

export default Component;

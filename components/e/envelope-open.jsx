import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsuqk849p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsuqk849p"/>`,
		"fallback": "mynaui:envelope-open",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1fh3foma.css';
import '../../css/o/oj7hu3rce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1fh3foma"/><path class="oj7hu3rce"/>`,
		"fallback": "token:ccd",
	});
}

export default Component;

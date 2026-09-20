import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdga42b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdga42b5l"/>`,
		"fallback": "typcn:arrow-loop",
	});
}

export default Component;

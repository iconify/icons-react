import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9rx2dlmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9rx2dlmp"/>`,
		"fallback": "token:harmony",
	});
}

export default Component;

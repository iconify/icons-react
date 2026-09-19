import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt9nwbbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt9nwbbay"/>`,
		"fallback": "bx:bxs-chevron-left-circle",
	});
}

export default Component;

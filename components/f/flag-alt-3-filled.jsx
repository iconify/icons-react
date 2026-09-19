import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak6-xi64q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak6-xi64q"/>`,
		"fallback": "boxicons:flag-alt-3-filled",
	});
}

export default Component;

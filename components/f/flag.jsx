import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na6ohp9fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na6ohp9fa"/>`,
		"fallback": "typcn:flag",
	});
}

export default Component;

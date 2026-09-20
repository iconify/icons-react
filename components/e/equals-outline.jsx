import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4-_r6b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4-_r6b9k"/>`,
		"fallback": "typcn:equals-outline",
	});
}

export default Component;

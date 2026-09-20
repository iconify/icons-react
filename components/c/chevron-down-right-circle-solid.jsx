import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb0ktbb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb0ktbb0u"/>`,
		"fallback": "mynaui:chevron-down-right-circle-solid",
	});
}

export default Component;

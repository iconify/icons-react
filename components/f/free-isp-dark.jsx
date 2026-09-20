import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f66yio8ll.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f66yio8ll"/>`,
		"fallback": "selfhst:free-isp-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl1lzyb4w.css';
import '../../css/l/l3fjs4bnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl1lzyb4w"/><path class="l3fjs4bnx"/>`,
		"fallback": "selfhst:autobrr",
	});
}

export default Component;

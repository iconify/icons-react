import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyd-i4gvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyd-i4gvd"/>`,
		"fallback": "stash:cursor-arrow",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf66cyj2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf66cyj2e"/>`,
		"fallback": "selfhst:filestash-dark",
	});
}

export default Component;

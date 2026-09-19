import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvtwuab4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvtwuab4v"/>`,
		"fallback": "fa6-solid:heart-pulse",
	});
}

export default Component;

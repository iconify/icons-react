import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-xddkblu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-xddkblu"/>`,
		"fallback": "ix:backup",
	});
}

export default Component;

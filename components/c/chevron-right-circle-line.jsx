import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aips0ubve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aips0ubve"/>`,
		"fallback": "si:chevron-right-circle-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne464o5ch.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ne464o5ch"/>`,
		"fallback": "pajamas:external-link",
	});
}

export default Component;

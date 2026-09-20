import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnb6en77t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnb6en77t"/>`,
		"fallback": "mi:caret-down",
	});
}

export default Component;

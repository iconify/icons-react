import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4-p-l7oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d4-p-l7oi"/>`,
		"fallback": "stash:corner-down-right-duotone",
	});
}

export default Component;

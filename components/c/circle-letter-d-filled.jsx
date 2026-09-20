import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byv9a6byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byv9a6byw"/>`,
		"fallback": "tabler:circle-letter-d-filled",
	});
}

export default Component;

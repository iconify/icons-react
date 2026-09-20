import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntoj3hb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntoj3hb7n"/>`,
		"fallback": "tabler:alert-circle-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh8uhlb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh8uhlb9n"/>`,
		"fallback": "mdi:dice-d12-outline",
	});
}

export default Component;

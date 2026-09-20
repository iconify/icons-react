import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6rw2wb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6rw2wb6z"/>`,
		"fallback": "typcn:bell",
	});
}

export default Component;

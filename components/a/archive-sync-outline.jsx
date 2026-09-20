import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btsdemx5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btsdemx5r"/>`,
		"fallback": "mdi:archive-sync-outline",
	});
}

export default Component;

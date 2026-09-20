import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szb74yk6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szb74yk6q"/>`,
		"fallback": "tabler:bookmark-off",
	});
}

export default Component;

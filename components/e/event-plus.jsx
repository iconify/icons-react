import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-scmdk6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-scmdk6q"/>`,
		"fallback": "mdi:event-plus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_h31qb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_h31qb0l"/>`,
		"fallback": "streamline-sharp:critical-thinking-2-remix",
	});
}

export default Component;

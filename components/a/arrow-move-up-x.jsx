import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5l9n7_8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5l9n7_8l"/>`,
		"fallback": "tabler:arrow-move-up-x",
	});
}

export default Component;

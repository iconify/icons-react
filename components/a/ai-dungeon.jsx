import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oopk6j_9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oopk6j_9w"/>`,
		"fallback": "thesvg-color:ai-dungeon",
	});
}

export default Component;

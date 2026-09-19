import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s630meb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s630meb3q"/>`,
		"fallback": "heroicons:arrow-turn-right-up",
	});
}

export default Component;

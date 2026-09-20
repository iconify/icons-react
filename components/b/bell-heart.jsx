import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5hyo8b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5hyo8b7v"/>`,
		"fallback": "tabler:bell-heart",
	});
}

export default Component;

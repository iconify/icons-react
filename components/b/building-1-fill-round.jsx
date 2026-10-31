import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqn6o2rec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqn6o2rec"/>`,
		"fallback": "coolicons:building-1-fill-round",
	});
}

export default Component;

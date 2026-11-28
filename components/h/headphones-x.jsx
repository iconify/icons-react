import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klgc4_9wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klgc4_9wu"/>`,
		"fallback": "noviair:headphones-x",
	});
}

export default Component;

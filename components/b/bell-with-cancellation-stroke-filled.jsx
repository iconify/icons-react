import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp8tutbeq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp8tutbeq"/>`,
		"fallback": "dinkie-icons:bell-with-cancellation-stroke-filled",
	});
}

export default Component;

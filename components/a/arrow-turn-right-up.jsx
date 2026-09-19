import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx946b01g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx946b01g"/>`,
		"fallback": "at-icons:arrow-turn-right-up",
	});
}

export default Component;

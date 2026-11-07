import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmt8ryb3g.css';
import '../../css/u/uijvjtbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmt8ryb3g"/><path class="uijvjtbbr"/>`,
		"fallback": "solar:chevrons-right-left-outline",
	});
}

export default Component;

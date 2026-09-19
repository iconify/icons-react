import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqmz5zbea.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqmz5zbea"/>`,
		"fallback": "dinkie-icons:coconut",
	});
}

export default Component;

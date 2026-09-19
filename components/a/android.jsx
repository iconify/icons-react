import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv6y-3b6x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv6y-3b6x"/>`,
		"fallback": "dinkie-icons:android",
	});
}

export default Component;

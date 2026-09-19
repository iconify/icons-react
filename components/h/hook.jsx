import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4jd8gbct.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4jd8gbct"/>`,
		"fallback": "dinkie-icons:hook",
	});
}

export default Component;

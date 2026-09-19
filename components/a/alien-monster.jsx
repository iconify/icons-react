import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aadf2yd4y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aadf2yd4y"/>`,
		"fallback": "dinkie-icons:alien-monster",
	});
}

export default Component;

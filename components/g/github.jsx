import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr1y-gc4y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr1y-gc4y"/>`,
		"fallback": "dinkie-icons:github",
	});
}

export default Component;

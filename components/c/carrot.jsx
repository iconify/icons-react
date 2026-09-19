import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6e890s2d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6e890s2d"/>`,
		"fallback": "dinkie-icons:carrot",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux8ahf0rc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux8ahf0rc"/>`,
		"fallback": "fa7-brands:ember",
	});
}

export default Component;

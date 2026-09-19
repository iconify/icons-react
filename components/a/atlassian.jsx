import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm55zv6ob.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm55zv6ob"/>`,
		"fallback": "fa7-brands:atlassian",
	});
}

export default Component;

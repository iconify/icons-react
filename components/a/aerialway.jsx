import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaodrq99u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaodrq99u"/>`,
		"fallback": "maki:aerialway",
	});
}

export default Component;

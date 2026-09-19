import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuu2q6-xf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuu2q6-xf"/>`,
		"fallback": "fa-solid:bell",
	});
}

export default Component;

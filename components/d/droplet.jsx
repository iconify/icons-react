import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqssqub7g.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqssqub7g"/>`,
		"fallback": "fa6-solid:droplet",
	});
}

export default Component;

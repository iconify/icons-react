import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw8pjnzkl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw8pjnzkl"/>`,
		"fallback": "fa7-solid:hand-holding-dollar",
	});
}

export default Component;

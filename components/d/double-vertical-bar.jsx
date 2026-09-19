import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9zt39bkn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9zt39bkn"/>`,
		"fallback": "dinkie-icons:double-vertical-bar",
	});
}

export default Component;

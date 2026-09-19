import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us6b7-d0g.css';
import '../../css/m/m-wnqh6af.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us6b7-d0g"/><path class="m-wnqh6af"/>`,
		"fallback": "carbon:battery-low",
	});
}

export default Component;

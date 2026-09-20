import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhc7zy51m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhc7zy51m"/>`,
		"fallback": "octicon:dash-16",
	});
}

export default Component;

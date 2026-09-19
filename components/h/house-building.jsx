import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig1xo-bba.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig1xo-bba"/>`,
		"fallback": "dinkie-icons:house-building",
	});
}

export default Component;

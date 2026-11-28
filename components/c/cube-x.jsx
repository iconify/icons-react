import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e53y4lb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e53y4lb3e"/>`,
		"fallback": "noviair-light:cube-x",
	});
}

export default Component;

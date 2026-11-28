import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_8qjbb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_8qjbb1y"/>`,
		"fallback": "noviair-light:git-merge-check",
	});
}

export default Component;

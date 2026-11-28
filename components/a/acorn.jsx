import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qui-vigal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qui-vigal"/>`,
		"fallback": "noviair-light:acorn",
	});
}

export default Component;

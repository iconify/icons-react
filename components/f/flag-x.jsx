import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lub6lcczs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lub6lcczs"/>`,
		"fallback": "noviair:flag-x",
	});
}

export default Component;

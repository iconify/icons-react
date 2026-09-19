import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-l-pb8zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-l-pb8zd"/>`,
		"fallback": "griddy-icons:align-horizontal-center",
	});
}

export default Component;

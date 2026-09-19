import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsy1qobdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsy1qobdj"/>`,
		"fallback": "griddy-icons:fire",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr-lowb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr-lowb7q"/>`,
		"fallback": "noviair-light:gauge-check",
	});
}

export default Component;

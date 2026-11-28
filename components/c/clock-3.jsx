import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzfi-7-ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzfi-7-ax"/>`,
		"fallback": "noviair-light:clock-3",
	});
}

export default Component;

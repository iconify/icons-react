import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omryd1bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omryd1bpg"/>`,
		"fallback": "noviair-light:brain",
	});
}

export default Component;

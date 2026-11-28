import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-v3vibll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-v3vibll"/>`,
		"fallback": "noviair:clock-gear",
	});
}

export default Component;

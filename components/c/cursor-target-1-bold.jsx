import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2r1s-rsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2r1s-rsk"/>`,
		"fallback": "streamline-ultimate:cursor-target-1-bold",
	});
}

export default Component;

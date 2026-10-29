import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhp12cbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhp12cbix"/>`,
		"fallback": "withicons:infinity-sketch",
	});
}

export default Component;

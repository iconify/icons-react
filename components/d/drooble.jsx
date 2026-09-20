import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er3j_9bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er3j_9bxj"/>`,
		"fallback": "thesvg-color:drooble",
	});
}

export default Component;

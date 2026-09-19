import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tom5xu4iv.css';

const viewBox = {"width":14,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tom5xu4iv"/>`,
		"fallback": "fontisto:cursor",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3-zg1bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3-zg1bbz"/>`,
		"fallback": "noviair:bike-lock",
	});
}

export default Component;

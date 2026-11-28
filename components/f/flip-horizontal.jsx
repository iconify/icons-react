import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-q82zjom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-q82zjom"/>`,
		"fallback": "noviair:flip-horizontal",
	});
}

export default Component;

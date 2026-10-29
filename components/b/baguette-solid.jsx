import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vboqt815i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vboqt815i"/>`,
		"fallback": "withicons:baguette-solid",
	});
}

export default Component;

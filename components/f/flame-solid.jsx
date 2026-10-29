import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwy029bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwy029bfo"/>`,
		"fallback": "withicons:flame-solid",
	});
}

export default Component;

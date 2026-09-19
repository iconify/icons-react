import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em5dqch8d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em5dqch8d"/>`,
		"fallback": "dashicons:camera",
	});
}

export default Component;

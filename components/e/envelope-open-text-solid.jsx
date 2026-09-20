import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4phf5orn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4phf5orn"/>`,
		"fallback": "la:envelope-open-text-solid",
	});
}

export default Component;

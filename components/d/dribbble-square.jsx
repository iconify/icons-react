import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9gcr-yud.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9gcr-yud"/>`,
		"fallback": "la:dribbble-square",
	});
}

export default Component;

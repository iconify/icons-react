import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4d9uq82f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4d9uq82f"/>`,
		"fallback": "la:crosshairs-solid",
	});
}

export default Component;

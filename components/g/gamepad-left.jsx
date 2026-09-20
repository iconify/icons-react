import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5zr88b3l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5zr88b3l"/>`,
		"fallback": "memory:gamepad-left",
	});
}

export default Component;

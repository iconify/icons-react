import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4oiey3br.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4oiey3br"/>`,
		"fallback": "memory:door-box",
	});
}

export default Component;

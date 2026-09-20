import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi0wmscgz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi0wmscgz"/>`,
		"fallback": "pinhead:ferris-wheel",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maqvw1bdz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maqvw1bdz"/>`,
		"fallback": "fa7-solid:envelope-open-text",
	});
}

export default Component;

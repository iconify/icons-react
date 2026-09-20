import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mut1umbgi.css';
import '../../css/g/g3-s662on.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mut1umbgi"/><path class="g3-s662on"/>`,
		"fallback": "vaadin:date-input",
	});
}

export default Component;

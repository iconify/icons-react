import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8vby9b-d.css';

const viewBox = {"width":1856,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8vby9b-d"/>`,
		"fallback": "fa:exclamation-triangle",
	});
}

export default Component;

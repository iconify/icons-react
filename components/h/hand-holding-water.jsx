import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7gaq379y.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7gaq379y"/>`,
		"fallback": "fa-solid:hand-holding-water",
	});
}

export default Component;

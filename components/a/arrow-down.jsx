import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-lctwb3s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-lctwb3s"/>`,
		"fallback": "fa-solid:arrow-down",
	});
}

export default Component;

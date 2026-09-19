import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3qesqo9d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3qesqo9d"/>`,
		"fallback": "fa-solid:expand",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbnufl6zh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbnufl6zh"/>`,
		"fallback": "fa-solid:arrow-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alb4r-mom.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alb4r-mom"/>`,
		"fallback": "fa-solid:hand-point-left",
	});
}

export default Component;

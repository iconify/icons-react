import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3yr3sb5y.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3yr3sb5y"/>`,
		"fallback": "fa6-solid:flask-vial",
	});
}

export default Component;

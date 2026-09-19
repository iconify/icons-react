import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_--k2e7i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_--k2e7i"/>`,
		"fallback": "fa-solid:bible",
	});
}

export default Component;

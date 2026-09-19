import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjle_n9oj.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjle_n9oj"/>`,
		"fallback": "fa-solid:arrow-right",
	});
}

export default Component;

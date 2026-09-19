import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyl68vb5r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyl68vb5r"/>`,
		"fallback": "fa-solid:align-right",
	});
}

export default Component;

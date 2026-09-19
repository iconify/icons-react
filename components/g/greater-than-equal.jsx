import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dth_nabga.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dth_nabga"/>`,
		"fallback": "fa-solid:greater-than-equal",
	});
}

export default Component;

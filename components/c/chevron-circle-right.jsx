import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc4huuc1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc4huuc1v"/>`,
		"fallback": "la:chevron-circle-right",
	});
}

export default Component;

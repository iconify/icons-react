import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uawyetb4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uawyetb4f"/>`,
		"fallback": "osmic:car-parts-14",
	});
}

export default Component;

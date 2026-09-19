import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dycx40bom.css';

const viewBox = {"width":2176,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dycx40bom"/>`,
		"fallback": "vs:cow",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukc4lr9sb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukc4lr9sb"/>`,
		"fallback": "subway:dail-pad",
	});
}

export default Component;

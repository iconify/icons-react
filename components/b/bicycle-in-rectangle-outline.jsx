import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5mssp-sb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5mssp-sb"/>`,
		"fallback": "pinhead:bicycle-in-rectangle-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij74tbbef.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij74tbbef"/>`,
		"fallback": "cryptocurrency:atlas",
	});
}

export default Component;

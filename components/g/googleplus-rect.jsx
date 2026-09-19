import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0unw79-c.css';

const viewBox = {"width":1000.658,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0unw79-c"/>`,
		"fallback": "brandico:googleplus-rect",
	});
}

export default Component;

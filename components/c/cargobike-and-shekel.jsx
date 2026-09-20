import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jze4w4b-z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jze4w4b-z"/>`,
		"fallback": "pinhead:cargobike-and-shekel",
	});
}

export default Component;

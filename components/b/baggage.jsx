import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoqsrlb7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoqsrlb7r"/>`,
		"fallback": "streamline:baggage",
	});
}

export default Component;

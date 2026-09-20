import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmqav161f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmqav161f"/>`,
		"fallback": "la:car-battery-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otnwqp01m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otnwqp01m"/>`,
		"fallback": "dinkie-icons:bigger",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikywg0ber.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikywg0ber"/>`,
		"fallback": "dinkie-icons:anchor",
	});
}

export default Component;

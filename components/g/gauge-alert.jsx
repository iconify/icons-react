import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or9cg0bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or9cg0bkf"/>`,
		"fallback": "noviair-light:gauge-alert",
	});
}

export default Component;

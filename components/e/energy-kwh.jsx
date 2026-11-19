import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9q0bq0rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9q0bq0rr"/>`,
		"fallback": "evicons:energy-kwh",
	});
}

export default Component;

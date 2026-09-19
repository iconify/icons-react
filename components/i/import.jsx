import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxqlq7bfr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxqlq7bfr"/>`,
		"fallback": "whh:import",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg3c0pb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg3c0pb8m"/>`,
		"fallback": "octicon:arrow-down-left-24",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2dx9kmgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2dx9kmgv"/>`,
		"fallback": "ri:battery-2-charge-line",
	});
}

export default Component;

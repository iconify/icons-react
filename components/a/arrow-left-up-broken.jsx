import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb-87k45x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb-87k45x"/>`,
		"fallback": "solar:arrow-left-up-broken",
	});
}

export default Component;

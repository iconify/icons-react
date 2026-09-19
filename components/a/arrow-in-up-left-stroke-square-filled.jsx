import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_-go266m.css';
import '../../css/q/q-jo2hc6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_-go266m"/><path class="q-jo2hc6u"/>`,
		"fallback": "boxicons:arrow-in-up-left-stroke-square-filled",
	});
}

export default Component;

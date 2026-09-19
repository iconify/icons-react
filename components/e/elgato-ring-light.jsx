import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsp71pmgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsp71pmgr"/>`,
		"fallback": "cbi:elgato-ring-light",
	});
}

export default Component;

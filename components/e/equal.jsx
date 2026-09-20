import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peh9kwb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peh9kwb5w"/>`,
		"fallback": "mdi:equal",
	});
}

export default Component;

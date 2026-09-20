import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foxw_5bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foxw_5bxn"/>`,
		"fallback": "mdi:call-outline",
	});
}

export default Component;

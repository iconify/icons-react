import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwmq47vio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwmq47vio"/>`,
		"fallback": "thesvg:beatport",
	});
}

export default Component;

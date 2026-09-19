import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwiaklbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwiaklbel"/>`,
		"fallback": "griddy-icons:flash-filled",
	});
}

export default Component;

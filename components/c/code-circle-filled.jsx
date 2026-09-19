import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn56m8vwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn56m8vwv"/>`,
		"fallback": "griddy-icons:code-circle-filled",
	});
}

export default Component;

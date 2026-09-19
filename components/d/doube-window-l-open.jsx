import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g88ua1b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g88ua1b-l"/>`,
		"fallback": "cbi:doube-window-l-open",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l09vj155v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l09vj155v"/>`,
		"fallback": "cbi:doube-window-r-open",
	});
}

export default Component;

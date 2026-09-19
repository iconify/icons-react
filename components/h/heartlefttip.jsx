import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs1v6ub8l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs1v6ub8l"/>`,
		"fallback": "fxemoji:heartlefttip",
	});
}

export default Component;

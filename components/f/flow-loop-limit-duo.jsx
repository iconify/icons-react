import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfz9u0b1c.css';
import '../../css/a/ao__mmbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfz9u0b1c secondary"/><path class="ao__mmbtc primary"/>`,
		"fallback": "iconaut:flow-loop-limit-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnl04-bah.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnl04-bah"/>`,
		"fallback": "jam:first-aid",
	});
}

export default Component;

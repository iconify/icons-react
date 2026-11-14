import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz5ib_b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz5ib_b8a"/>`,
		"fallback": "cbi:dartboard",
	});
}

export default Component;

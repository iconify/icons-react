import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clk1bdckm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clk1bdckm"/>`,
		"fallback": "prime:caret-down",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj_clkr6u.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj_clkr6u"/>`,
		"fallback": "foundation:arrows-expand",
	});
}

export default Component;

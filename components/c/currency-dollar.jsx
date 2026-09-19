import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjhz6wbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjhz6wbuv"/>`,
		"fallback": "heroicons:currency-dollar",
	});
}

export default Component;

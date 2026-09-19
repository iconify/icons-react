import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyjiv_0rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyjiv_0rg"/>`,
		"fallback": "flowbite:chart-mixed-solid",
	});
}

export default Component;

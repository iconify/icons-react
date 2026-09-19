import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfjiz2bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfjiz2bbg"/>`,
		"fallback": "flowbite:css-solid",
	});
}

export default Component;

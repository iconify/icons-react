import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6vlzc1us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6vlzc1us"/>`,
		"fallback": "gg:arrows-scroll-h",
	});
}

export default Component;

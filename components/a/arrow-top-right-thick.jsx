import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4bn97f2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4bn97f2f"/>`,
		"fallback": "mdi:arrow-top-right-thick",
	});
}

export default Component;

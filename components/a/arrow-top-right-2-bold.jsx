import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3hh90dme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3hh90dme"/>`,
		"fallback": "iconamoon:arrow-top-right-2-bold",
	});
}

export default Component;

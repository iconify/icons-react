import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_we1sb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_we1sb6w"/>`,
		"fallback": "iconamoon:arrow-top-left-3-square-thin",
	});
}

export default Component;

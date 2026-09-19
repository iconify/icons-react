import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxs59cbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxs59cbyq"/>`,
		"fallback": "iconoir:center-align",
	});
}

export default Component;

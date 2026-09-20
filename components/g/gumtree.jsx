import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly8ue0hvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly8ue0hvj"/>`,
		"fallback": "thesvg-color:gumtree",
	});
}

export default Component;

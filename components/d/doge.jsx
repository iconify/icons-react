import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5cd--b_f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5cd--b_f"/>`,
		"fallback": "dinkie-icons:doge",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6ny-pb4b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6ny-pb4b"/>`,
		"fallback": "picon:add",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u17wqacrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u17wqacrx"/>`,
		"fallback": "noviair:christmas-tree-star",
	});
}

export default Component;

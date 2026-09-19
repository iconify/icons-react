import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypzkg3b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypzkg3b_y"/>`,
		"fallback": "griddy-icons:code-commit-horizontal-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f61n8eakj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f61n8eakj"/>`,
		"fallback": "noviair-light:flag-check",
	});
}

export default Component;

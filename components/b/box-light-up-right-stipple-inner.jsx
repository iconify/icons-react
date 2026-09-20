import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnu9g8bun.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnu9g8bun"/>`,
		"fallback": "memory:box-light-up-right-stipple-inner",
	});
}

export default Component;

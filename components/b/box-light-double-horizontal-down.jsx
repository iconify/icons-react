import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0_h-gb7w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0_h-gb7w"/>`,
		"fallback": "memory:box-light-double-horizontal-down",
	});
}

export default Component;

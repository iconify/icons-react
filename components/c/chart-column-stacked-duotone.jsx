import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evq3bovfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evq3bovfu primary"/>`,
		"fallback": "iconaut:chart-column-stacked-duotone",
	});
}

export default Component;

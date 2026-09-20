import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml2y4kw_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml2y4kw_y"/>`,
		"fallback": "keyline-icons:chart-bar-stacked-sharp",
	});
}

export default Component;

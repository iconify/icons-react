import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0syes_ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary y0syes_ml"/>`,
		"fallback": "iconaut:bookmark-off-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltfo6yaen.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltfo6yaen"/>`,
		"fallback": "jam:bookmark-remove",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqv85o6cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqv85o6cb"/>`,
		"fallback": "iconamoon:arrow-right-2-bold",
	});
}

export default Component;

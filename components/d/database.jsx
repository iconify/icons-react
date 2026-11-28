import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-07p3bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-07p3bui"/>`,
		"fallback": "noviair:database",
	});
}

export default Component;

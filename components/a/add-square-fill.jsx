import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl3uc8bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl3uc8bcs"/>`,
		"fallback": "mingcute:add-square-fill",
	});
}

export default Component;

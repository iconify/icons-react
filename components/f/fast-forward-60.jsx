import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zugi9wbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zugi9wbfj"/>`,
		"fallback": "mdi:fast-forward-60",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r05__4bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r05__4bvj"/>`,
		"fallback": "mingcute:anticlockwise-line",
	});
}

export default Component;

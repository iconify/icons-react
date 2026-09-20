import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4auf4bvx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4auf4bvx"/>`,
		"fallback": "streamline-color:arrow-shrink-diagonal-2",
	});
}

export default Component;

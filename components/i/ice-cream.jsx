import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxtd5ob1w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxtd5ob1w"/>`,
		"fallback": "maki:ice-cream",
	});
}

export default Component;

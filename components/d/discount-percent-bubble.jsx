import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f11wjqhij.css';
import '../../css/o/oimetacyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f11wjqhij"/><path class="oimetacyk"/>`,
		"fallback": "streamline-freehand:discount-percent-bubble",
	});
}

export default Component;

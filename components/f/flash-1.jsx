import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-5joveap.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-5joveap"/>`,
		"fallback": "streamline:flash-1",
	});
}

export default Component;

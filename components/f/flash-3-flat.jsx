import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8m6zybgq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8m6zybgq"/>`,
		"fallback": "streamline-flex-color:flash-3-flat",
	});
}

export default Component;

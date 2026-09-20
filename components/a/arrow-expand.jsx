import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-2io57o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-2io57o"/>`,
		"fallback": "streamline-flex-color:arrow-expand",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o538qrz7w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o538qrz7w"/>`,
		"fallback": "fa7-solid:grip-vertical",
	});
}

export default Component;

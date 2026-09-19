import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8etgtbrf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8etgtbrf"/>`,
		"fallback": "f7:at",
	});
}

export default Component;

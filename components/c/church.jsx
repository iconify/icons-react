import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxd7rab2l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxd7rab2l"/>`,
		"fallback": "fa7-solid:church",
	});
}

export default Component;

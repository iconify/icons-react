import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi8mhqxrl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi8mhqxrl"/>`,
		"fallback": "f7:arrowtriangle-right-circle",
	});
}

export default Component;

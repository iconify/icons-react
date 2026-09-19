import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz4zuhgej.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz4zuhgej"/>`,
		"fallback": "f7:arrowtriangle-up-circle",
	});
}

export default Component;

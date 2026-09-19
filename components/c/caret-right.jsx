import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7vmeuosh.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7vmeuosh"/>`,
		"fallback": "fa-solid:caret-right",
	});
}

export default Component;

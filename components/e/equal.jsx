import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeo6qjb2r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeo6qjb2r"/>`,
		"fallback": "f7:equal",
	});
}

export default Component;

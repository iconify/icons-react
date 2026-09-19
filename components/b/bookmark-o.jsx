import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc0hhlbpl.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc0hhlbpl"/>`,
		"fallback": "fa:bookmark-o",
	});
}

export default Component;

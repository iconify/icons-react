import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j26yc11gb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j26yc11gb"/>`,
		"fallback": "f7:circle-grid-hex-fill",
	});
}

export default Component;

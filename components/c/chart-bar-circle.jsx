import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j972wnbjd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j972wnbjd"/>`,
		"fallback": "f7:chart-bar-circle",
	});
}

export default Component;

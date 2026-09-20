import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za9zjhboy.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za9zjhboy"/>`,
		"fallback": "wi:day-snow-wind",
	});
}

export default Component;

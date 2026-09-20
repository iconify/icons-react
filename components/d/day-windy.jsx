import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4kanwwph.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4kanwwph"/>`,
		"fallback": "wi:day-windy",
	});
}

export default Component;

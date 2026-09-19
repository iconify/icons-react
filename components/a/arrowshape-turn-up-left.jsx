import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e461qjbcz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e461qjbcz"/>`,
		"fallback": "f7:arrowshape-turn-up-left",
	});
}

export default Component;

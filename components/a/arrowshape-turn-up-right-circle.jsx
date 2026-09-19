import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nargvjeuu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nargvjeuu"/>`,
		"fallback": "f7:arrowshape-turn-up-right-circle",
	});
}

export default Component;

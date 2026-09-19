import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5e7_6j1i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5e7_6j1i"/>`,
		"fallback": "f7:arrowshape-turn-up-left-2",
	});
}

export default Component;

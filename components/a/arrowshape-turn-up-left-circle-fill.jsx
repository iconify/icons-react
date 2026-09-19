import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8r7yvbad.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8r7yvbad"/>`,
		"fallback": "f7:arrowshape-turn-up-left-circle-fill",
	});
}

export default Component;

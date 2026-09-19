import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zguwfcbzo.css';

const viewBox = {"width":496,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zguwfcbzo"/>`,
		"fallback": "ps:code",
	});
}

export default Component;

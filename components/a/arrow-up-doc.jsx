import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk6o67b-r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk6o67b-r"/>`,
		"fallback": "f7:arrow-up-doc",
	});
}

export default Component;

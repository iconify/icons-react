import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqkjsnhke.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqkjsnhke"/>`,
		"fallback": "f7:arrow-left-square-fill",
	});
}

export default Component;

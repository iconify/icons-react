import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzooad_xb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzooad_xb"/>`,
		"fallback": "f7:book-circle",
	});
}

export default Component;

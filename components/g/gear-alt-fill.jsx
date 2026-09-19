import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt_ud7bor.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt_ud7bor"/>`,
		"fallback": "f7:gear-alt-fill",
	});
}

export default Component;

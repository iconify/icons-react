import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-712cbnw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-712cbnw"/>`,
		"fallback": "f7:chevron-left-2",
	});
}

export default Component;

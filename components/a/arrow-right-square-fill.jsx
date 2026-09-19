import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx-cjtjaf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx-cjtjaf"/>`,
		"fallback": "f7:arrow-right-square-fill",
	});
}

export default Component;

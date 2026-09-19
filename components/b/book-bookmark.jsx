import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co9wg_bom.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co9wg_bom"/>`,
		"fallback": "fa7-solid:book-bookmark",
	});
}

export default Component;

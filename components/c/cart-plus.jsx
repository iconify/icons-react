import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9_4fgbjw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9_4fgbjw"/>`,
		"fallback": "fa7-solid:cart-plus",
	});
}

export default Component;

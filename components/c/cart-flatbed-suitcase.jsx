import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r76f4fxbw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r76f4fxbw"/>`,
		"fallback": "fa7-solid:cart-flatbed-suitcase",
	});
}

export default Component;

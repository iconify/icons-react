import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8jm71bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8jm71bvq"/>`,
		"fallback": "mingcute:image-minus-fill",
	});
}

export default Component;

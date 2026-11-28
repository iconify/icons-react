import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxuv1pb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxuv1pb-o"/>`,
		"fallback": "noviair:book-open-star",
	});
}

export default Component;

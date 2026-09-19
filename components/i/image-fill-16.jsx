import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c97yg1bpc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c97yg1bpc"/>`,
		"fallback": "garden:image-fill-16",
	});
}

export default Component;

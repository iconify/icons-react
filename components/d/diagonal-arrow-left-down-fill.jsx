import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d61kb7bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d61kb7bae"/>`,
		"fallback": "eva:diagonal-arrow-left-down-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmfs9bcfi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmfs9bcfi"/>`,
		"fallback": "fluent-mdl2:favorite-star-fill",
	});
}

export default Component;

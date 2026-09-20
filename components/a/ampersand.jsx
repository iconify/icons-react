import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka83c5b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka83c5b9y"/>`,
		"fallback": "pixelarticons:ampersand",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0cenz3yg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0cenz3yg"/>`,
		"fallback": "la:facebook-square",
	});
}

export default Component;

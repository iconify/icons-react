import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnb9i2bda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnb9i2bda"/>`,
		"fallback": "la:facebook-messenger",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te9g8x_4z.css';

const viewBox = {"width":1024,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te9g8x_4z"/>`,
		"fallback": "fa:eur",
	});
}

export default Component;

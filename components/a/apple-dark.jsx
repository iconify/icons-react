import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6jy5bc9c.css';

const viewBox = {"width":814,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6jy5bc9c"/>`,
		"fallback": "thesvg-color:apple-dark",
	});
}

export default Component;

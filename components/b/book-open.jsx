import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he6wivbef.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he6wivbef"/>`,
		"fallback": "fa6-solid:book-open",
	});
}

export default Component;

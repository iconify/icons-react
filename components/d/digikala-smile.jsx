import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7dlxwb4y.css';

const viewBox = {"width":115,"height":43};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7dlxwb4y"/>`,
		"fallback": "thesvg-color:digikala-smile",
	});
}

export default Component;

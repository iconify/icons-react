import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8vywe9jw.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8vywe9jw"/>`,
		"fallback": "fa:heart",
	});
}

export default Component;

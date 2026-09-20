import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-qa1pbbz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-qa1pbbz"/>`,
		"fallback": "simple-line-icons:film",
	});
}

export default Component;

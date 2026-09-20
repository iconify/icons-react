import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9cz7dbxp.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9cz7dbxp"/>`,
		"fallback": "wpf:doctors-bag",
	});
}

export default Component;

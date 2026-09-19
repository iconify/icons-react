import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef9funr0t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef9funr0t"/>`,
		"fallback": "dinkie-icons:entry",
	});
}

export default Component;

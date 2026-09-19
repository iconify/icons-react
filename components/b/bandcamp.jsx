import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glij5acyf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glij5acyf"/>`,
		"fallback": "fa7-brands:bandcamp",
	});
}

export default Component;

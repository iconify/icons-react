import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irlsicc8e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irlsicc8e"/>`,
		"fallback": "cib:allocine",
	});
}

export default Component;

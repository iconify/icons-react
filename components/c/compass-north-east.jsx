import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1guqyk7u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1guqyk7u"/>`,
		"fallback": "memory:compass-north-east",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc42u29hn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc42u29hn"/>`,
		"fallback": "la:hockey-puck-solid",
	});
}

export default Component;

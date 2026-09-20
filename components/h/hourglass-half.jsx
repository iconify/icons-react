import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g45il9taj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g45il9taj"/>`,
		"fallback": "la:hourglass-half",
	});
}

export default Component;

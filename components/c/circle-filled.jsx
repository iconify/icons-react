import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-0e6zbvg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-0e6zbvg"/>`,
		"fallback": "pepicons-pencil:circle-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0334b8lh.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0334b8lh"/>`,
		"fallback": "ps:car",
	});
}

export default Component;

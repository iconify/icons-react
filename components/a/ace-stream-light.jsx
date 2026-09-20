import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa6q3wgpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa6q3wgpa"/>`,
		"fallback": "selfhst:ace-stream-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji7qdwgys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji7qdwgys"/>`,
		"fallback": "grommet-icons:disabled-outline",
	});
}

export default Component;

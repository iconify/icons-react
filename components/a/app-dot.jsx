import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6qhu6bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6qhu6bfv"/>`,
		"fallback": "keyline-icons:app-dot",
	});
}

export default Component;

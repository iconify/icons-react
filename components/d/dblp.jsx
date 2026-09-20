import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn9a3fbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn9a3fbdk"/>`,
		"fallback": "simple-icons:dblp",
	});
}

export default Component;

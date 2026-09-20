import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgbt92b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jgbt92b6h"/>`,
		"fallback": "solar:album-outline",
	});
}

export default Component;

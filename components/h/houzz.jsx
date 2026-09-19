import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uym9oabze.css';

const viewBox = {"width":14,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uym9oabze"/>`,
		"fallback": "fontisto:houzz",
	});
}

export default Component;

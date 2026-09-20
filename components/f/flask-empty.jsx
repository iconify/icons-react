import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-t5xollv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-t5xollv"/>`,
		"fallback": "mdi-light:flask-empty",
	});
}

export default Component;

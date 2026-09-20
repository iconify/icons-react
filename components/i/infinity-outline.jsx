import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgqfhn5ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgqfhn5ax"/>`,
		"fallback": "solar:infinity-outline",
	});
}

export default Component;

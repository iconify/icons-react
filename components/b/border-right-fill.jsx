import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5fta5b8d.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5fta5b8d"/>`,
		"fallback": "pullo:border-right-fill",
	});
}

export default Component;

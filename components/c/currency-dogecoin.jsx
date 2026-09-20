import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ke2tj-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9ke2tj-v"/>`,
		"fallback": "tabler:currency-dogecoin",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_26nbbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_26nbbed"/>`,
		"fallback": "iconaut:circle-braces-solid",
	});
}

export default Component;

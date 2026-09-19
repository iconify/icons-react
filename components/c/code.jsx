import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fff0oumac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fff0oumac"/>`,
		"fallback": "gg:code",
	});
}

export default Component;

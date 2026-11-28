import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrd05ac5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrd05ac5s"/>`,
		"fallback": "iconaut:apple-solid",
	});
}

export default Component;

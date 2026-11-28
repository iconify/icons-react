import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu64asbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu64asbmo"/>`,
		"fallback": "iconaut:arrow-up-to-line-solid",
	});
}

export default Component;

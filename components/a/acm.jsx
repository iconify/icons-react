import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fohjow7uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fohjow7uj"/>`,
		"fallback": "thesvg:acm",
	});
}

export default Component;

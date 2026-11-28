import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkzb6nbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkzb6nbkw primary"/>`,
		"fallback": "iconaut:align-justify-duotone",
	});
}

export default Component;

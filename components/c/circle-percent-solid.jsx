import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn7a6mbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn7a6mbyz"/>`,
		"fallback": "iconaut:circle-percent-solid",
	});
}

export default Component;

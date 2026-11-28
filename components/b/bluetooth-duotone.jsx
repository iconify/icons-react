import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufc3b8blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary ufc3b8blb"/>`,
		"fallback": "iconaut:bluetooth-duotone",
	});
}

export default Component;

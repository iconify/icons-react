import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aax8d_bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aax8d_bas"/>`,
		"fallback": "ci:close-md",
	});
}

export default Component;

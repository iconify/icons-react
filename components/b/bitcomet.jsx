import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cea3snb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cea3snb5j"/>`,
		"fallback": "thesvg-color:bitcomet",
	});
}

export default Component;

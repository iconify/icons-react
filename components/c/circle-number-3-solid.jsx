import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1atj4rea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1atj4rea"/>`,
		"fallback": "iconaut:circle-number-3-solid",
	});
}

export default Component;

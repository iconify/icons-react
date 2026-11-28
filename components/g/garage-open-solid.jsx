import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac09f8epz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac09f8epz"/>`,
		"fallback": "iconaut:garage-open-solid",
	});
}

export default Component;

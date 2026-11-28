import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv48m6brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv48m6brz"/>`,
		"fallback": "iconaut:checks-solid",
	});
}

export default Component;

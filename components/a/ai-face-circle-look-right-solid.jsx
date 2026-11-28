import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0d94nbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0d94nbog"/>`,
		"fallback": "iconaut:ai-face-circle-look-right-solid",
	});
}

export default Component;

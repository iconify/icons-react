import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx1xvfbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx1xvfbqr"/>`,
		"fallback": "iconaut:ease-linear-solid",
	});
}

export default Component;

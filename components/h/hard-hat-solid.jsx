import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh4c7sbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh4c7sbrf"/>`,
		"fallback": "iconaut:hard-hat-solid",
	});
}

export default Component;

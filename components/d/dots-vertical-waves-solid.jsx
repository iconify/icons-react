import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9-jvcgtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9-jvcgtb"/>`,
		"fallback": "mynaui:dots-vertical-waves-solid",
	});
}

export default Component;

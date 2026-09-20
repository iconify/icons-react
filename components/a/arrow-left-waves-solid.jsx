import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8eu9ebpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8eu9ebpy"/>`,
		"fallback": "mynaui:arrow-left-waves-solid",
	});
}

export default Component;

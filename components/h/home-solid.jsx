import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogqs7wb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogqs7wb8x"/>`,
		"fallback": "mynaui:home-solid",
	});
}

export default Component;

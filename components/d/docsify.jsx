import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv7fy9bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv7fy9bsr"/>`,
		"fallback": "thesvg-color:docsify",
	});
}

export default Component;

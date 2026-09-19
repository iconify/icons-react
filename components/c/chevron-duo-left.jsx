import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1-jd7bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1-jd7bhr"/>`,
		"fallback": "ci:chevron-duo-left",
	});
}

export default Component;

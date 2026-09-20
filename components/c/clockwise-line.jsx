import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7i1s3b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7i1s3b9u"/>`,
		"fallback": "ri:clockwise-line",
	});
}

export default Component;

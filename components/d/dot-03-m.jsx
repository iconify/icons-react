import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szu0jobmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szu0jobmh"/>`,
		"fallback": "ci:dot-03-m",
	});
}

export default Component;

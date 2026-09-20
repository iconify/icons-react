import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hao0u7bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hao0u7bqt"/>`,
		"fallback": "thesvg-color:emlakjet",
	});
}

export default Component;

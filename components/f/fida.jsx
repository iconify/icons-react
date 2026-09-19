import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1cuu9krx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1cuu9krx"/>`,
		"fallback": "cryptocurrency:fida",
	});
}

export default Component;

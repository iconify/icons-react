import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb5_0-b-i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb5_0-b-i"/>`,
		"fallback": "cryptocurrency:ankr",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgbwi1bgm.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgbwi1bgm"/>`,
		"fallback": "ls:full",
	});
}

export default Component;

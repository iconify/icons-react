import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x83cv4zrd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x83cv4zrd"/>`,
		"fallback": "fa7-solid:bacteria",
	});
}

export default Component;

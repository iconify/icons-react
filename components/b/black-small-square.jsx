import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhx3ojbzn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhx3ojbzn"/>`,
		"fallback": "fluent-emoji-flat:black-small-square",
	});
}

export default Component;

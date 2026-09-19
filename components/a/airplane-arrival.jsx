import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lguui-g7q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lguui-g7q"/>`,
		"fallback": "fluent-emoji-high-contrast:airplane-arrival",
	});
}

export default Component;

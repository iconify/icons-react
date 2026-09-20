import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqvk4veur.css';
import '../../css/a/a1ey-7bqt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqvk4veur"/><path class="a1ey-7bqt"/>`,
		"fallback": "ooui:bookmark-list-ltr",
	});
}

export default Component;

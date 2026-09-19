import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwq0kwbgy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwq0kwbgy"/>`,
		"fallback": "fa7-solid:bezier-curve",
	});
}

export default Component;

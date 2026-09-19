import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd7v6vbko.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd7v6vbko"/>`,
		"fallback": "fa7-solid:face-smile-beam",
	});
}

export default Component;

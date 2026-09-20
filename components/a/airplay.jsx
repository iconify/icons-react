import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/yb6xombiz.css';
import '../../css/c/cv7nxjb3u.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="yb6xombiz"/><path class="cv7nxjb3u"/></g>`,
		"fallback": "system-uicons:airplay",
	});
}

export default Component;

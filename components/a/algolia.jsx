import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g58yorbkc.css';
import '../../css/m/mvgayujde.css';
import '../../css/m/mdlzjj5jz.css';

const viewBox = {"width":485,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g58yorbkc"/><path class="mvgayujde"/><path class="mdlzjj5jz"/></g>`,
		"fallback": "thesvg-color:algolia",
	});
}

export default Component;

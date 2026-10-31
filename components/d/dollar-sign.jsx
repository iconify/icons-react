import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gzj8bbbjn.css';
import '../../css/s/sul_k0bwf.css';
import '../../css/w/wwiu0ibfy.css';
import '../../css/h/h3f7job7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gzj8bbbjn wm-shadow"/><path class="sul_k0bwf wm-shadow"/><path class="wwiu0ibfy"/><path class="h3f7job7b"/></g>`,
		"fallback": "withicons-brutal:dollar-sign",
	});
}

export default Component;

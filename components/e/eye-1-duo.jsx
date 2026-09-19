import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnbhbrjgz.css';
import '../../css/s/sh6_yxm3e.css';
import '../../css/c/cu6ft-b7q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hnbhbrjgz"/><path class="sh6_yxm3e"/><path class="cu6ft-b7q"/></g>`,
		"fallback": "glyphs:eye-1-duo",
	});
}

export default Component;
